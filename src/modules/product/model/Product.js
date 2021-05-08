/**
 * @class Product has information related to its components and selected variants, it also calculates price based on variant selection.
 */
export default class Product {
  _name;
  _components = [];
  _basePrice;
  _priceUnit;
  _interestRate = 13;
  _defaultSpecification = [];
  /**
   *
   * @param {String} name Name of product
   * @param {Number} basePrice Base price of varient
   * @param {String} priceUnit Unit of price e.g '$','₹',...
   */
  constructor(name, basePrice = 0, priceUnit = '₹') {
    this._name = name
    this._basePrice = basePrice
    this._priceUnit = priceUnit
  }

  get name() {
    return this._name
  }

  set components(components) {
    this._components = components
  }

  get components() {
    return this._components
  }

  get priceUnit() {
    return this._priceUnit
  }

  /**
  * @param {Component} component This is used while building Product object
  * @returns {Product}
  */
  withComponent(component) {
    this._components.push(component)
    return this
  }

  /**
  *
  * @param {Array} specs used to specifiy non configurable specification. such as display configurations, number of ports
  * @returns {Product}
  */
  withDefaultSpec(specs) {
    this._defaultSpecification = specs
    return this
  }

  /**
  * It calculate total price based on variant selection
  */
  get price() {
    let totalPrice = this._basePrice
    this._components.forEach(c => {
      totalPrice += c.selectedVariant.price
    })

    const totalPriceWithInterest = totalPrice + totalPrice * (this._interestRate / 100)
    return {
      total: this._priceUnit + totalPrice,
      perMonth: this._priceUnit + (totalPriceWithInterest / 12).toFixed(0)
    }
  }

  /**
  * It will return selected variant details with default specification
  */
  get specs() {
    const selectedSpecs = []

    this._components.forEach(c => {
      selectedSpecs.push(c.selectedVariant.name)
    })

    return [...selectedSpecs, ...this._defaultSpecification]
  }
}
