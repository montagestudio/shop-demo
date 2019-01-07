/**
 * @module ui/header.reel
 */
var Component = require("montage/ui/component").Component;

var defaultNavigator = require("../../../core/navigator").defaultNavigator;
var defaultOrderService = require("../../../core/order-service").defaultOrderService;

/**
 * @class Header
 * @extends Component
 */
exports.Header = Component.specialize(/** @lends Header# */ {

    cart: {
        value: null
    },

    navigator: {
        value: null
    },

    constructor: {
        value: function () {
            this.order = defaultOrderService.get();
        }
    },

    handleHomePress: {
        value: function () {
            defaultNavigator.route('products');
        }
    },

    handleCartAction: {
        value: function () {
            defaultNavigator.route('cart');
        }
    }

});
