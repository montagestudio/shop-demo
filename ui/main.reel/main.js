/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

//Until automatic loading lands
var mainService = require("data/main.datareel/main.mjson").montageObject;

var defaultNavigator = require("../../core/navigator").defaultNavigator;
var DataStream = require("montage/data/service/data-stream").DataStream;
var DataQuery = require("montage/data/model/data-query").DataQuery;
var DataOrdering= require("montage/data/model/data-ordering").DataOrdering;
var Criteria = require("montage/core/criteria").Criteria;
var Furniture = require("data/main.datareel/model/furniture").Furniture;
var ProductService = require("../../../core/product-service").ProductService;


/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {

    constructor: {
        value: function () {
            this.navigator = defaultNavigator;
            this.productService = new ProductService();
            // this.products = this.productService.list();
            // this.featured = this.productService.featured();

            //Furniture DataStream;
            // var criteria = new Criteria().initWithExpression("username == $.username", {
            //     username: "montagejs"
            // });
            this.furnitureQuery = DataQuery.withTypeAndCriteria(Furniture);
            this.furnitureDataStream =  new DataStream();
            this.furnitureDataStream.query = this.furnitureQuery;

            //
            var self = this;
            mainService.fetchData(this.furnitureQuery,null,this.furnitureDataStream).then(function (furnitures) {
                if(!furnitures) {
                    Array.prototype.push.apply(self.furnitureDataStream.data,self.productService.list());
                }
                if(!self.featured) {
                    self.featured = self.productService.featured();
                }
                return null;
            });

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
