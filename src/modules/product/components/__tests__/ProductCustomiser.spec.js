import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ProductCustomiser from "./../ProductCustomiser";
import ProductPreview from "./../ProductPreview";
import ProductPrice from "./../ProductPrice";
import ProductConfiguration from "./../ProductConfiguration";
import selectedProduct from "./../../store/macbook16proSpaceGrey";
const localVue = createLocalVue()
localVue.use(Vuex)

describe('ProductCustomiser', () => {

    let store

    beforeEach(() => {

        store = new Vuex.Store({
            modules: {
                product: {
                    state: () => ({
                        selectedProduct
                    }),
                }
            }
        })
    })
    it('renders correct classes', () => {
        expect.assertions(1);
        const wrapper = mount(ProductCustomiser, { store, localVue });
        expect(wrapper.classes('product')).toBe(true);

    })
    it('renders ProductPreview and ProductConfiguration', () => {
        expect.assertions(2);
        const wrapper = mount(ProductCustomiser, { store, localVue });
        const productPreview = wrapper.getComponent(ProductPreview);
        const productConfiguration = wrapper.getComponent(ProductConfiguration);
        expect(productPreview.exists()).toBe(true);
        expect(productConfiguration.exists()).toBe(true);

    })
    it('renders ProductPrice', () => {
        expect.assertions(1);
        const wrapper = mount(ProductCustomiser, { store, localVue });
        const productPrice = wrapper.getComponent(ProductPrice);
        expect(productPrice.exists()).toBe(true);

    })
});