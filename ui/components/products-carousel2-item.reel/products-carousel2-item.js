var Component = require("montage/ui/component").Component;

/**
 * @class ProductsCarousel2Item
 * @extends Component
 */
exports.ProductsCarousel2Item = Component.specialize({

    _image: {
        value: null
    },

    image: {
        get: function () {
            return this._image;
        },
        set: function (value) {
            if (this._image !== value) {
                this._image = value;
                if (value) {
                    this.needsDraw = true;
                }
            }
        }
    },

    draw: {
        value: function () {
            if (this._image) {
                this.imageElement.style.backgroundImage = "url(" + this._image + ")";
            }
        }
    }

});
