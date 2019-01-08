/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;
var defaultNavigator = require("../../core/navigator").defaultNavigator;

var ReceiptView = require("../views/receipt-view.reel").ReceiptView;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {

    constructor: {
        value: function () {
            this.navigator = defaultNavigator;

        }
    },

    templateDidLoad: {
        value: function () {

            this.navigator.registerRoutes([
                {
                    component: this.productsView,
                    id: 'products',
                    children: [
                        {
                            component: this.productDetailView,
                            id: 'detail'
                        }
                    ]
                },
                {
                    component: this.cartView,
                    id: 'cart'
                },
                {
                    component: this.checkoutView,
                    id: 'checkout'
                },
                {
                    component: this.receiptView,
                    id: 'receipt'
                }
            ]);

            this.navigator.succession = this.succession;
            
            this.navigator.route('products');
        }
    }

});
