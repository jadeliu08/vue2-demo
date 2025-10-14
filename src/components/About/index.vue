<template>
  <div>
    <span>About</span>
    <slot></slot>
    <slot name="child" />
  </div>
</template>
<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'About',
}
</script>
<style scoped></style>