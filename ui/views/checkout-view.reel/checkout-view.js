/**
 * @module "ui/checkout-view.reel"
 */
var Component = require("montage/ui/component").Component;
var Montage = require("montage").Montage;
var defaultOrderService = require("../../../core/order-service").defaultOrderService;
var defaultNavigator = require("../../../core/navigator").defaultNavigator;

var formValidator = Montage.specialize({
    firstname: {
        value: null
    },
    lastname: {
        value: null
    },
    email: {
        value: null
    },
    address: {
        value: null
    },
    zipcode: {
        value: null
    },
    state: {
        value: null
    },
    city: {
        value: null
    },
    cardNumber: {
        value: null
    },
    expirationDate: {
        value: null
    },
    cvv: {
        value: null
    },
    isValid: {
        value: false
    },
    checkValidity: {
        value: function () {
            this.isValid = !!this.firstname && !!this.lastname &&
                !!this.email && !!this.address && !!this.zipcode &&
                !!this.state && !!this.city && !!this.cardNumber &&
                !!this.expirationDate && !!this.cvv;
        }
    }
});

/**
 * @class CheckoutView
 * @extends Component
 */
exports.CheckoutView = Component.specialize(/** @lends CheckoutView.prototype */{
    
    form: {
        value: null
    },

    enterDocument: {
        value: function () {
            this.form = new formValidator();
            this.order = defaultOrderService.get();
            this.updateTotal();
        }
    },

    handleAction: {
        value: function () {
            this.form.checkValidity();
        }
    },

    handleCancelAction: {
        value: function () {
            defaultNavigator.route('cart');
        }
    },

    updateTotal: {
        value: function () {
            this.total = defaultOrderService.localizedTotal;
        }
    },

    handleConfirmAction: {
        value: function () {
            defaultOrderService.checkout();
            defaultNavigator.route('receipt');
        }
    }

});
