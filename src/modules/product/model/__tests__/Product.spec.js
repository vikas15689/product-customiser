import Product from './../Product'
import Component from './../Component'
import Variant from './../Variant'

describe('Product', () => {
  it('create Product', () => {
    expect.assertions(3)
    const testProduct = new Product('iWatch')
    expect(testProduct.components).toHaveLength(0)
    expect(testProduct.priceUnit).toBe('₹')
    expect(testProduct.price.total).toBe('₹0')
  })
  it('select variant and check price', () => {
    expect.assertions(3)
    const selectThisVariant = new Variant(
      '2TB SSD storage',
      40000
    )
    const storageComponent = new Component('Storage')
      .withVariant(
        new Variant(
          '1TB SSD storage',
          0,
          true
        )
      )
      .withVariant(
        selectThisVariant
      ).withVariant(
        new Variant(
          '4TB SSD storage',
          100000
        )
      ).withVariant(
        new Variant(
          '8TB SSD storage',
          220000
        )
      )
    const testProduct = new Product('16‑inch MacBook Pro - Space Grey', 239900)
      .withComponent(storageComponent)

    expect(testProduct.price.total).toBe('₹239900')

    storageComponent.select(selectThisVariant)

    expect(testProduct.price.total).toBe('₹279900')
    expect(testProduct.price.perMonth).toBe('₹26357')
  })
  it('Check specs', () => {
    expect.assertions(1)

    const storageComponent = new Component('Storage')
      .withVariant(
        new Variant(
          '1TB SSD storage',
          0,
          true
        )
      )
    const testProduct = new Product('16‑inch MacBook Pro - Space Grey', 239900)
      .withComponent(storageComponent).withDefaultSpec(['Retina display'])

    expect(testProduct.specs).toHaveLength(2)
  })
})
