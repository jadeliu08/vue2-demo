<template>
  <div>
    <input type="text" @input="handleInput" :value="$attrs.value"/>
  </div>
</template>
<script>
export default {
  name: 'CustomHeader',
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>


<style scoped>

</style>