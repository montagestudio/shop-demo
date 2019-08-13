var Component = require("montage/ui/component").Component;
var defaultNavigator = require("../../../core/navigator").defaultNavigator;

/**
 * @class ProductsGridItem
 * @extends Component
 */
exports.ProductsGridItem = Component.specialize({

    _pictures: {
        value: null
    },

    pictures: {
        get: function () {
            return this._pictures;
        },
        set: function (value) {
            if (this._pictures !== value) {
                this._pictures = value;

                if (value) {
                    this.needsDraw = true;
                }
            }
        }
    },

    handlePress: {
        value: function () {
            defaultNavigator.route('products/detail', this.product);
        }
    },

    draw: {
        value: function () {
            if (this.pictures && this.pictures.length) {
                this.imageElement.style.backgroundImage = "url(" + this.pictures[0].url + ")";
            }
        }
    }

});
