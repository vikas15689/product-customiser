<template>
  <div class="app-container">
    <!--This is where application will switch between components or we can add routing here based on application context-->
    <ProductCustomiser />
  </div>
</template>

<script>
/**
 * Application is bootstraped to this component and this is configurable in main.js
 */
import ProductCustomiser from "./modules/product/components/ProductCustomiser";
export default {
  name: "App",
  components: {
    ProductCustomiser,
  },
};
</script>
<style lang="scss">
@import "./scss/main";
div.app-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /** 72px reserved for header or top nav bar */
  padding-top: 72px;
}
</style>
