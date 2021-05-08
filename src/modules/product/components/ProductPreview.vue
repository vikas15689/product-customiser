<template>
  <img class="product__image" :src="src" />
</template>
<script>
/**
 * @Component ProductPreview is used display product image
 */
export default {
  name: "ProductPreview",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
img.product__image {
  width: 410px;
  height: auto;
}
</style>
