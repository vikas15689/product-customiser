<template>
  <div class="product__config">
    <div class="product__config__header">Customise your {{ name }}</div>
    <div v-for="spec in specs" :key="spec" class="product__config__spec">
      {{ spec }}
    </div>
  </div>
</template>
<script>
/**
 * @Component ProductConfiguration is used display selected variants and default specs
 */
export default {
  name: "ProductConfiguration",
  props: {
    /**
     * Name of Product
     */
    name: {
      type: String,
      default: "",
    },
    /**
     * Array of specification computed in Product
     */
    specs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss">
div.product__config {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__header {
    font-size: 32px;
    color: var(--font-dark);
    font-weight: 600;
    line-height: 1.2;
    // width: 70%;
    margin-bottom: 16px;
    width: 350px;
  }
  &__spec {
    font-size: 14px;
    color: var(--font-dark);
    font-weight: 400;
  }
  &__spec + &__spec {
    margin-top: 12px;
  }
}
</style>
