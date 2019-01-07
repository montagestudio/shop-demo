"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderService = (function () {
    function OrderService() {
        this.order = [];
    }
    Object.defineProperty(OrderService.prototype, "total", {
        get: function () {
            return this.order.reduce(function (total, productOrder) {
                return total += (productOrder.quantity *
                    Number(productOrder.product.unitCost.replace(/[^0-9.-]+/g, "")));
            }, 0).toFixed(2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderService.prototype, "localizedTotal", {
        get: function () {
            return "$" + this.total.toLocaleString();
        },
        enumerable: true,
        configurable: true
    });
    OrderService.prototype.add = function (product) {
        if (product) {
            var productOrder = this.find(product);
            if (productOrder) {
                productOrder.quantity++;
            }
            else {
                this.order.push({
                    product: product,
                    quantity: 1
                });
            }
        }
    };
    OrderService.prototype.updateProductQuantity = function (product, quantity) {
        if (product) {
            if (quantity > 0) {
                var productOrder = this.order[product.name];
                productOrder.quantity++;
            }
            else {
                this.remove(product);
            }
        }
    };
    OrderService.prototype.remove = function (product) {
        if (product) {
            var productOrder = this.find(product);
            var index = this.order.indexOf(productOrder);
            this.order.splice(index, 1);
        }
    };
    OrderService.prototype.clear = function () {
        this.order.clear();
    };
    OrderService.prototype.get = function () {
        return this.order;
    };
    OrderService.prototype.checkout = function () {
        this.clear();
    };
    OrderService.prototype.find = function (product) {
        return this.order.find(function (productOrder) { return productOrder.product === product; });
    };
    return OrderService;
}());
exports.OrderService = OrderService;
exports.defaultOrderService = new OrderService();
