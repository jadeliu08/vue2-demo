<template>
  <div>
    <HelloWorld/>
    <RouterLink to="/detail">go Detail</RouterLink>
    <RouterLink to="/about">go About</RouterLink>
  </div>
</template>
<script>
import HelloWorld from "../HelloWorld/index.vue";
import {RouterLink} from "vue-router";

export default {
  name: 'HomeComponent',
  components: {
    HelloWorld,
    RouterLink,
  },
}
</script>
<style scoped></style>