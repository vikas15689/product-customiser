import Component from './../Component'
import Variant from './../Variant'

describe('Component', () => {
  it('create component with empty variants', () => {
    expect.assertions(1)
    const testComponent = new Component('Memory')
    expect(testComponent.variants).toHaveLength(0)
  })
  it('create component with 1 variants', () => {
    expect.assertions(1)
    const variant = new Variant('6GB DDR2', 6000)
    const testComponent = new Component('Memory').withVariant(variant)
    expect(testComponent.variants).toHaveLength(1)
  })
  it('returns undefined when no variant is selected', () => {
    expect.assertions(1)
    const variant = new Variant('6GB DDR2', 6000)
    const testComponent = new Component('Memory').withVariant(variant)
    expect(testComponent.selectedVariant).toBeUndefined()
  })
  it('returns correct selected variant', () => {
    expect.assertions(1)
    const variant = new Variant('6GB DDR2', 6000, true)
    const testComponent = new Component('Memory').withVariant(variant)
    expect(testComponent.selectedVariant).toBe(variant)
  })
  it('select variant through method', () => {
    expect.assertions(1)
    const variant = new Variant('6GB DDR2', 6000)
    const testComponent = new Component('Memory').withVariant(variant)
    testComponent.select(variant)
    expect(testComponent.selectedVariant).toBe(variant)
  })
})
