/**
 * @file Component.js
 * @description Root UI Component for SAP ALV Material Report App.
 * Follows SAP Fiori / OpenUI5 MVC Component pattern.
 * Part of KIIT Capstone Project - SAP ABAP/Fiori Track
 * @author [Your Name]
 * @version 1.0.0
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("materialreport.Component", {

        metadata: {
            manifest: "json"
        },

        /**
         * Lifecycle hook - called when component initializes
         * Loads material data into the JSON model
         */
        init: function () {
            // Call parent init
            UIComponent.prototype.init.apply(this, arguments);

            // Load material data from JSON file
            var oModel = new JSONModel();
            oModel.loadData("model/data.json");
            this.setModel(oModel);

            console.log("SAP Material Report Component initialized.");
        }
    });
});