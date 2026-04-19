/**
 * @file Main.controller.js
 * @description Controller for SAP ALV Material Report
 * Handles filtering, export, and data binding logic
 * Follows SAP MVC / SAPUI5 controller conventions
 * KIIT Capstone Project - SAP ABAP/Fiori Track
 * @author [Your Name]
 */

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "materialreport/utils/formatter"
], function (Controller, JSONModel, MessageToast, formatter) {
    "use strict";

    return Controller.extend("materialreport.controller.Main", {

        // Expose formatter so XML view can use it
        formatter: formatter,

        /**
         * onInit - Lifecycle hook called when view is initialized
         * Sets up the app model with filtered data and counts
         */
        onInit: function () {
            var oComponent = this.getOwnerComponent();
            var oDataModel = oComponent.getModel();

            // Wait for data to load then initialize app model
            oDataModel.attachRequestCompleted(function () {
                var aData = oDataModel.getProperty("/materials") || [];
                this._initAppModel(aData);
            }.bind(this));
        },

        /**
         * Initialize the app-level JSON model
         * Stores filtered list + counts for tiles
         */
        _initAppModel: function (aData) {
            var oAppModel = new JSONModel({
                filteredMaterials: aData,
                totalCount:        aData.length,
                availableCount:    this._countByStatus(aData, "Available"),
                lowCount:          this._countByStatus(aData, "Low Stock"),
                outCount:          this._countByStatus(aData, "Out of Stock")
            });
            this.getView().setModel(oAppModel, "appModel");
            this._updateRowCountText(aData.length);
        },

        /**
         * onFilter - Called on any filter input change
         * Applies all active filters simultaneously
         */
        onFilter: function () {
            var oComponent  = this.getOwnerComponent();
            var aAll        = oComponent.getModel().getProperty("/materials") || [];

            // Read filter values
            var sMatId    = this.byId("filterMatId").getValue().toLowerCase();
            var sDesc     = this.byId("filterDesc").getValue().toLowerCase();
            var sPlant    = this.byId("filterPlant").getSelectedKey();
            var sStatus   = this.byId("filterStatus").getSelectedKey();

            // Apply filters
            var aFiltered = aAll.filter(function (item) {
                return (
                    (!sMatId  || item.materialId.toLowerCase().includes(sMatId))  &&
                    (!sDesc   || item.description.toLowerCase().includes(sDesc))  &&
                    (!sPlant  || item.plant === sPlant)                           &&
                    (!sStatus || item.status === sStatus)
                );
            });

            // Update app model
            var oAppModel = this.getView().getModel("appModel");
            oAppModel.setProperty("/filteredMaterials", aFiltered);
            oAppModel.setProperty("/totalCount",        aFiltered.length);
            oAppModel.setProperty("/availableCount",    this._countByStatus(aFiltered, "Available"));
            oAppModel.setProperty("/lowCount",          this._countByStatus(aFiltered, "Low Stock"));
            oAppModel.setProperty("/outCount",          this._countByStatus(aFiltered, "Out of Stock"));

            this._updateRowCountText(aFiltered.length);
        },

        /**
         * onReset - Clears all filters
         */
        onReset: function () {
            this.byId("filterMatId").setValue("");
            this.byId("filterDesc").setValue("");
            this.byId("filterPlant").setSelectedKey("");
            this.byId("filterStatus").setSelectedKey("");
            this.onFilter();
            MessageToast.show("All filters have been reset.");
        },

        /**
         * onExport - Exports current filtered data as CSV
         * Simulates SAP ALV download functionality
         */
        onExport: function () {
            var oAppModel = this.getView().getModel("appModel");
            var aData     = oAppModel.getProperty("/filteredMaterials") || [];

            if (aData.length === 0) {
                MessageToast.show("No data to export.");
                return;
            }

            // Build CSV content
            var sCSV = "Material ID,Description,Plant,Category,Quantity,Unit,Price (INR),Status,Last Updated\n";
            aData.forEach(function (row) {
                sCSV += [
                    row.materialId,
                    '"' + row.description + '"',
                    row.plant,
                    row.category,
                    row.quantity,
                    row.unit,
                    row.price,
                    row.status,
                    row.lastUpdated
                ].join(",") + "\n";
            });

            // Trigger download
            var oBlob = new Blob([sCSV], { type: "text/csv;charset=utf-8;" });
            var sURL  = URL.createObjectURL(oBlob);
            var oLink = document.createElement("a");
            oLink.href     = sURL;
            oLink.download = "SAP_MaterialReport_" + new Date().toISOString().slice(0,10) + ".csv";
            oLink.click();
            URL.revokeObjectURL(sURL);

            MessageToast.show("Exported " + aData.length + " records to CSV.");
        },

        /**
         * onTilePress - Handler for summary tile clicks
         */
        onTilePress: function (oEvent) {
            var sHeader = oEvent.getSource().getHeader();
            MessageToast.show("Tile selected: " + sHeader);
        },

        // ── PRIVATE HELPERS ───────────────────────────────────────

        _countByStatus: function (aData, sStatus) {
            return aData.filter(function (i) {
                return i.status === sStatus;
            }).length;
        },

        _updateRowCountText: function (nCount) {
            var oText = this.byId("rowCountText");
            if (oText) {
                oText.setText("Showing " + nCount + " record(s)");
            }
        }

    });
});