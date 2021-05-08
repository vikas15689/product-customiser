/**
 * @class Component is used in product and this has name and variants information.
 */
export default class Component {
    _name;
    _variants = [];
    /**
     *
     * @param {String} name
     */
    constructor (name) {
      this._name = name
    }

    get name () {
      return this._name
    }

    set name (name) {
      this._name = name
    }

    set variants (variants) {
      this._variants = variants
    }

    get variants () {
      return this._variants
    }

    /**
    * Adds variant to Component and returns Component
    * @param {Variant} variant
    * @returns {Component}
    */
    withVariant (variant) {
      this._variants.push(variant)
      return this
    }

    /**
    * It selects variant in Component
    * @param {Variant} varient
    */
    select (varient) {
      this._variants.forEach(v => {
        if (varient === v) {
          v.selected = true
        } else {
          v.selected = false
        }
      })
    }

    /**
    * returns selected variant
    * @returns {Variant}
    */
    get selectedVariant () {
      return this._variants.find(v => v.selected)
    }
}
