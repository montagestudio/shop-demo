var Component = require("montage/ui/component").Component;
var ProductService = require("../../../core/product-service").ProductService;

/**
 * @class ProductsView
 * @extends Component
 */
exports.ProductsView = Component.specialize( /** @lends ProductsView# */ {

    constructor: {
        value: function () {
            this.productService = new ProductService();
            this.products = this.productService.list();
            this.highlighted = this.productService.highlighted();
        }
    }

});
