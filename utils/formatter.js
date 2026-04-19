/**
 * @file formatter.js
 * @description Utility formatter functions for SAP Fiori app
 * Used in XML views for data binding transformations
 * Equivalent to ABAP form routines in classical ALV reports
 * KIIT Capstone Project - SAP ABAP/Fiori Track
 */

sap.ui.define([], function () {
    "use strict";

    return {

        /**
         * Converts material status string to SAP ObjectStatus state
         * Mimics SAP traffic light (Ampel) concept in ABAP ALV
         *
         * @param {string} sStatus - "Available" | "Low Stock" | "Out of Stock"
         * @returns {string} SAP ValueState string
         */
        statusState: function (sStatus) {
            switch (sStatus) {
                case "Available":    return "Success";
                case "Low Stock":    return "Warning";
                case "Out of Stock": return "Error";
                default:             return "None";
            }
        },

        /**
         * Formats price as Indian currency string
         * @param {number} nPrice
         * @returns {string}
         */
        formatPrice: function (nPrice) {
            if (!nPrice && nPrice !== 0) return "";
            return "₹ " + parseFloat(nPrice).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        },

        /**
         * Returns CSS class based on quantity level
         * @param {number} nQty
         * @returns {string}
         */
        quantityState: function (nQty) {
            if (nQty === 0)   return "Error";
            if (nQty <= 10)   return "Warning";
            return "Success";
        }
    };
});