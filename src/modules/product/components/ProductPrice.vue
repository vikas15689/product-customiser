<template>
     <div class="product-price">
        <div class="product-price__summary">
          From {{perMonth}}/mo.<br />
          with EMI,** or {{total}}
        </div>
      </div>
</template>
<script>
/**
 * @Component ProductPrice is used display total price and emi per month
 */
export default {
  name: 'ProductPrice',
  props: {
    perMonth: {
      type: String,
      default: ''
    },
    total: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
div.product-price {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 24px 250px 24px 52px;
  &__summary {
    font-size: 24px;
    color: var(--font-dark);
    font-weight: 600;
    line-height: 1.2;
  }
}
</style>
