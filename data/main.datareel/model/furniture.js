var Montage = require("montage").Montage;

/**
 * @class Furniture
 * @extends Montage
 */



exports.Furniture = Montage.specialize(/** @lends Furniture.prototype */ {

    name: {
        value: undefined
    },
    orders: {
        value: undefined
    },
    pictures: {
        value: undefined
    },
    description: {
        value: undefined
    },
    link: {
        value: undefined
    },
    type: {
        value: undefined
    },            
    unitCost: {
        value: undefined
    },
    materialsAndFinishes: {
        value: undefined
    },            
    settings: {
        value: undefined
    },            
    sizeWxLxH: {
        value: undefined
    },            
    notes: {
        value: undefined
    },            
    schematics: {
        value: undefined
    },            
    vendors: {
        value: undefined
    },            
    designers: {
        value: undefined
    },            
    inStock: {
        value: undefined
    },            
    totalUnitsSold: {
        value: undefined
    },            
    grossSales: {
        value: undefined
    }       

});