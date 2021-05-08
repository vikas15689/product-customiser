/**
 * @class Variant of component 
 */
export default class Variant {
    _name;
    _price;
    _selected;
    /**
     * 
     * @param {String} name name of varient
     * @param {Number} price price of varient
     * @param {Boolean} selected is it selected
     */
    constructor(name, price, selected = false) {
        this._name = name
        this._price = price
        this._selected = selected
    }

    set selected(selected) {
        this._selected = selected;
    }
    get selected() {
        return this._selected;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }
    toString() {
        return this._name;
    }
}