<template>
  <div>
    User
    <RouterView></RouterView>
  </div>
</template>
<script>
import { RouterView } from 'vue-router';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'User',
  components: {
    RouterView,
  }
}
</script>
<style scoped></style>