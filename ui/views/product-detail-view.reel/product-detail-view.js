/**
 * @module "ui/product-detail.reel"
 */
var Component = require("montage/ui/component").Component;
var defaultNavigator = require("../../../core/navigator").defaultNavigator;
var defaultOrderService = require("../../../core/order-service").defaultOrderService;

/**
 * @class ProductDetailView
 * @extends Component
 */
exports.ProductDetailView = Component.specialize(/** @lends ProductDetailView.prototype */{

    enterDocument: {
        value: function () {
            this.product = defaultNavigator.getParams();
        }
    },

    handleBackAction: {
        value: function () {
            defaultNavigator.route('products');
        }
    },

    handleBuyAction: {
        value: function () {
            if (this.product) {
                defaultOrderService.add(this.product);
                defaultNavigator.route('cart');
            }
        }
    }

});
