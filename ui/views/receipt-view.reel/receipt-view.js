/**
 * @module "ui/receipt-view.reel"
 */
var Component = require("montage/ui/component").Component;
var defaultNavigator = require("../../../core/navigator").defaultNavigator;
var uuid = require("uuid-browser/v4");

/**
 * @class ReceiptView
 * @extends Component
 */
exports.ReceiptView = Component.specialize(/** @lends ReceiptView.prototype */{

    enterDocument: {
        value: function () {
            this.receipt = uuid();
        }
    },

    handleDoneAction: {
        value: function () {
            defaultNavigator.route('products');
        }
    }

});
