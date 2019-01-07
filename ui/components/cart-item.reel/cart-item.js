/**
 * @module "ui/product-cart-item.reel"
 */
var Component = require("montage/ui/component").Component;
var defaultOrderService = require("../../../core/order-service").defaultOrderService;

/**
 * @class CartItem
 * @extends Component
 */
exports.CartItem = Component.specialize(/** @lends CartItem.prototype */{

    handleDeleteAction: {
        value: function () {
            defaultOrderService.remove(this.item.product);
        }
    }

});
