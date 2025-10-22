<template>
  <div>
    <button @click="toggleCollapse">{{ collapsed ? '展开' : '折叠'}}</button>
    <div v-show="!collapsed">
      <slot />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'CollapsePanel',
    props: {
      collapsed: {
        type: Boolean,
        default: true,
      }
    },
    model: {
      prop: 'collapsed',
      event: 'change',
    },
    data() {
      return {};
    },
    methods: {
      toggleCollapse() {
        this.$emit('change', !this.collapsed);
      }
    }
  }
</script>
<style scoped>

</style>