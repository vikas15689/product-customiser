import { mount } from '@vue/test-utils'
import ProductVarient from "./../ProductVarient";

describe('ProductVarient', () => {

    it('renders correct classes', () => {
        expect.assertions(1);
        const wrapper = mount(ProductVarient);
        expect(wrapper.classes('product__varient')).toBe(true);

    })
    it('does render devaiation class if it has value', () => {
        expect.assertions(2);
        const wrapper = mount(ProductVarient, {
            propsData: {
                priceDeviation: "123"
            }
        });
        const div = wrapper.find('div.product__varient__deviation')
        expect(div.exists()).toBe(true);
        expect(div.text()).toBe("123");

    })
    it('does not render devaiation class if it is null', () => {
        expect.assertions(1);
        const wrapper = mount(ProductVarient);
        const div = wrapper.find('div.product__varient__deviation');
        expect(div.exists()).toBe(false);

    })
    it('data-selected must be present when selected prop is true', () => {
        expect.assertions(1);
        const wrapper = mount(ProductVarient, {
            propsData: {
                selected: true
            }
        });
        const div = wrapper.find('[data-selected]');
        expect(div.exists()).toBe(true);

    })
    it('click event must be emitted', () => {
        expect.assertions(1);
        const wrapper = mount(ProductVarient);
        wrapper.trigger('click');
        expect(wrapper.emitted('click')).toHaveLength(1)

    })

})