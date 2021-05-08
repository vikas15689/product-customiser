<template>
  <div class="app-footer">
    <!-- @slot used to display footer content -->
    <slot />
  </div>
</template>
<script>
/**
 * @Component Footer is generic component used to display footer content.It has sticky behavior so that it will always display at bottom.
 */
export default {
  name: 'Footer'
}
</script>
<style lang="scss">
div.app-footer {
  height: 130px;
  width: 100vw;
  position: sticky;
  bottom: 0px;
  background-color: var(--element);
  border-top: 1px solid var(--border);
}
</style>
