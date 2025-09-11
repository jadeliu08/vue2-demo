<template>
  <div id="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  name: 'App',
  components: {
    RouterView,
  },
  beforeCreate() {
    console.log('App beforeCreate');
  },
  created() {
    console.log('App created');
  },
  mounted() {
    console.log('App mounted');
  },
  activated() {
    console.log('App activated');
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
