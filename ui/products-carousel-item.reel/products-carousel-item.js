var Component = require("montage/ui/component").Component;

/**
 * @class ProductsCarouselItem
 * @extends Component
 */
exports.ProductsCarouselItem = Component.specialize({

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

    _background: {
        value: null
    },

    background: {
        get: function () {
            return this._background;
        },
        set: function (value) {
            if (this._background !== value) {
                this._background = value;
                if (value) {
                    this.needsDraw = true;
                }
            }
        }
    },

    draw: {
        value: function () {
            if (this._image) {
                this.imageElement.style.backgroundImage = "url(assets/" + this._image + ")";
                this.blurredImageElement.style.backgroundImage = "url(assets/" + this._image + ")";
            }
            if (this._background) {
                this._element.style.backgroundColor = this._background;
            }
        }
    }

});
