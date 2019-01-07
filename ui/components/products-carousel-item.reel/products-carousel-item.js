var Component = require("montage/ui/component").Component;
var PressComposer = require("montage/composer/press-composer").PressComposer;
var defaultNavigator = require("../../../core/navigator").defaultNavigator;

/**
 * @class ProductsCarouselItem
 * @extends Component
 */
exports.ProductsCarouselItem = Component.specialize({

    __pressComposer: {value: null},

    _pressComposer: {
        get: function () {
            if (!this.__pressComposer) {
                this.__pressComposer = new PressComposer();
                this.__pressComposer.lazyLoad = true;
                this.addComposerForElement(this.__pressComposer, this.element);
            }

            return this.__pressComposer;
        }
    },

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

    enterDocument: {
        value: function () {
            this._pressComposer.addEventListener('press', this);
        }
    },

    handlePress: {
        value: function () {
            this._pressComposer.removeEventListener('press', this);
            defaultNavigator.route('products/detail', this.product);
        }
    },

    draw: {
        value: function () {
            if (this._image) {
                this.imageElement.style.backgroundImage = "url(" + this._image + ")";
                this.blurredImageElement.style.backgroundColor = this.color;
            }
        }
    }

});
