/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;
var defaultNavigator = require("../../core/navigator").defaultNavigator;

var ProductsView = require("../views/products-view.reel").ProductsView;
var ProductDetailView = require("../views/product-detail-view.reel").ProductDetailView;
var CartView = require("../views/cart-view.reel").CartView;
var CheckoutView = require("../views/checkout-view.reel").CheckoutView;
var ReceiptView = require("../views/receipt-view.reel").ReceiptView;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {

    constructor: {
        value: function () {
            this.navigator = defaultNavigator;

            this.navigator.registerRoutes([
                {
                    component: new ProductsView(),
                    id: 'products',
                    children: [
                        {
                            component: new ProductDetailView(),
                            id: 'detail'
                        }
                    ]
                },
                {
                    component: new CartView(),
                    id: 'cart'
                },
                {
                    component: new CheckoutView(),
                    id: 'checkout'
                },
                {
                    component: new ReceiptView(),
                    id: 'receipt'
                }
            ]);
        }
    },

    templateDidLoad: {
        value: function () {
            this.navigator.succession = this.succession;
            this.navigator.route('products');
        }
    }

});
