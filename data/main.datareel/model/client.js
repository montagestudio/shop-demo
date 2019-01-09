var Montage = require("montage").Montage;

/**
 * @class Client
 * @extends Montage
 */


exports.Client = Montage.specialize(/** @lends Client.prototype */ {

    name: {
        value: undefined
    },
    notes: {
        value: undefined
    },
    photoOfClientSpace: {
        value: undefined
    },
    clientOrders: {
        value: undefined
    },
    billingAddress: {
        value: undefined
    },
    mapCache: {
        value: undefined
    }

});