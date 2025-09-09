<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="11111"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld/index.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
