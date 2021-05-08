<template>
  <div
    class="product__varient"
    @click="handleClick($event)"
    tabindex="-1"
    :data-selected="selected"
  >
    <div class="product__varient__name">{{ name }}</div>
    <div v-if="priceDeviation" class="product__varient__deviation">
      {{ priceDeviation }}
    </div>
  </div>
</template>
<script>
/**
 * @Component ProductVarient is used to display variant name and its price deviation
 */
export default {
  name: "ProductVarient",
  props: {
    name: {
      type: String,
      default: "",
    },
    selected: {
      type: Boolean,
      default: false,
    },
    priceDeviation: {
      type: String,
      default: null,
    },
  },
  methods: {
    handleClick(event) {
      /**
       * @event click
       */
      this.$emit("click", event);
    },
  },
};
</script>
<style lang="scss">
div.product__varient {
  padding: 1rem;
  min-height: 5.8rem;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid var(--border);
  cursor: pointer;
  outline: none;
  box-shadow:none;
   transition: box-shadow 0.3s linear;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border: 1px solid var(--border-dark);
  }

  &:focus {
    border: 2px solid var(--primary);
    padding: calc(1rem - 1px);
    box-shadow: 0 0 0 0.17647rem var(--primary-light);
  }
  &:active {
    box-shadow: none;
  }

  &[data-selected] {
    border: 2px solid var(--primary);
    padding: calc(1rem - 1px);
  }

  &__name {
    font-size: 16px;
    font-weight: 600;
    max-width: 250px;
  }
  &__deviation {
    font-size: 16px;
  }
}
</style>
