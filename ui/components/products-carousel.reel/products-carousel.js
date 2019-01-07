/**
 * @module ui/products-carousel.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class ProductsCarousel
 * @extends Component
 */
exports.ProductsCarousel = Component.specialize(/** @lends ProductsCarousel# */ {
    colors: {
        value: [
            '#545776',
            '#DC9C44',
            '#A9A723',
            '#44A3DC',
            '#E25C5F',
        ]
    }
});
