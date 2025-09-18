<template>
  <div id="app">
    <h2>This is h2 content</h2>
<!--    <HelloWorld></HelloWorld>-->
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld/index.vue';

export default {
  name: 'App',
  components: {
    RouterView,
    // HelloWorld,
  },
  beforeCreate() {
    console.log('App beforeCreate', this.$options);
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
