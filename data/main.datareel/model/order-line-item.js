var Montage = require("montage").Montage;

/**
 * @class OrderLineItem
 * @extends Montage
 */



 /*
 "tblhXmYJCRrudXtfb": {
        "$$hashKey": "object:8",
        "columns": [
            {
                "$$hashKey": "object:591",
                "id": "fld8McO1OPO1c03py",
                "name": "Name",
                "type": "text",
                "typeOptions": null
            },
            {
                "$$hashKey": "object:592",
                "foreignTable": "tblKVQ703nSQLPiam",
                "id": "fldr4qKhbHV1Im2ga",
                "name": "Furniture",
                "type": "foreignKey",
                "typeOptions": {
                    "foreignTableId": "tblKVQ703nSQLPiam",
                    "relationship": "many",
                    "symmetricColumnId": "fldueQ4PwdtmzEaeY"
                }
            },
            {
                "$$hashKey": "object:593",
                "id": "fldhccu3WgRxVIL5M",
                "name": "Background",
                "type": "multilineText",
                "typeOptions": null
            }
        ],
        "defaultView": {
            "id": "viw8rXatRJzbf9ek9",
            "name": "Main View"
        },
        "id": "tblhXmYJCRrudXtfb",
        "isEmpty": false,
        "isEmptyDueToFilter": false,
        "name": "Designers",
        "nameForUrl": "designers",
        "numRecordsToList": 3,
        "primaryColumnName": "Name"
    },*/



exports.OrderLineItem = Montage.specialize(/** @lends OrderLineItem.prototype */ {

    name: {
        value: undefined
    },
    quantity: {
        value: undefined
    },
    furnitureItem: {
        value: undefined
    },
    price: {
        value: undefined
    },
    totalCost: {
        value: undefined
    },
    belongsToOrder: {
        value: undefined
    }

});