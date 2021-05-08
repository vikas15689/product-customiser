<template>
  <div class="product">
    <div class="product__wrapper">
      <div class="product__preview">
        <ProductPreview :src="require('./../../../assets/macbook-16/dp.jpeg')" />
      </div>
      <div class="product__customiser">
        <ProductConfiguration :name="product.name" :specs="product.specs" />
        <div class="product__customiser__divider"></div>
        <div
          v-for="(component, idx) in product.components"
          :key="idx"
          class="product__customiser__component"
        >
          <div class="product__customiser__component__label">
            {{ component.name }}
          </div>
          <ProductVarient
            v-for="(variant, vidx) in component.variants"
            :key="'v' + vidx"
            :selected="variant.selected"
            :name="variant.name"
            :priceDeviation="getPriceDeviation(component, variant)"
            @click="component.select(variant)"
          >
          </ProductVarient>
        </div>
      </div>
    </div>
    <Footer>
      <ProductPrice
        :perMonth="product.price.perMonth"
        :total="product.price.total"
      />
    </Footer>
  </div>
</template>
<script>
import ProductPreview from "./ProductPreview";
import ProductConfiguration from "./ProductConfiguration";
import ProductVarient from "./ProductVarient";
import Footer from "./../../shared/components/Footer";
import ProductPrice from "./ProductPrice";

/**
 * @Component ProductCustomiser will display preview, Variant selection panel and Footer with Price
 */
export default {
  name: "ProductCustomiser",
  components: {
    ProductPreview,
    ProductConfiguration,
    ProductVarient,
    Footer,
    ProductPrice,
  },
  computed: {
    product() {
      return this.$store.state.product.selectedProduct;
    },
  },
  methods: {
    /**
     * Used to calculate deviation from selected variant
     */
    getPriceDeviation(component, variant) {
      if (!variant.selected) {
        const deviation = variant.price - component.selectedVariant.price;

        return deviation > 0 ? "+ "+this.product.priceUnit + deviation : "- "+this.product.priceUnit + deviation * -1;
      }
      return;
    },
  },
};
</script>
<style lang="scss">
div.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 500px;
  &__wrapper {
    width: 100%;
    height: 100%;
    max-width: 1000px;

    flex-wrap: wrap;

    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  &__preview {
    flex: 0 0 50%;
    padding: 24px;
    position: sticky;
    top: 0px;
    background: var(--background);
  }
  &__customiser {
    flex: 0 0 50%;
    padding: 24px;
    min-width: 400px;

    &__divider {
      width: 100%;
      border-top: 2px solid var(--border);
      margin: 24px 0px;
    }
    &__component {
      display: flex;
      flex-direction: column;
      &__label {
        font-size: 16px;
        font-weight: 600;
      }
      > * + * {
        margin-top: 16px;
      }
    }

    &__component + &__component {
      margin-top: 24px;
    }
  }
}
</style>
