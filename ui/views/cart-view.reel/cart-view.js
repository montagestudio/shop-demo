var Component = require("montage/ui/component").Component;
var defaultOrderService = require("../../../core/order-service").defaultOrderService;
var defaultNavigator = require("../../../core/navigator").defaultNavigator;

/**
 * @class CartView
 * @extends Component
 */
exports.CartView = Component.specialize(/** @lends CartView.prototype */{

    enterDocument: {
        value: function () {
            this.order = defaultOrderService.get();
            this.updateTotal();
        }
    },

    handleCheckoutAction: {
        value: function () {
            defaultNavigator.route('checkout');
        }
    },

    handleClearAction: {
        value: function () {
            defaultOrderService.clear();
            this.updateTotal();
        }
    },

    handleDeleteAction: {
        value: function () {
            this.updateTotal();
        }
    },

    handleQuantityAction: {
        value: function () {
            this.updateTotal();
        }
    },

    updateTotal: {
        value: function () {
            this.total = defaultOrderService.localizedTotal;
        }
    }

});
