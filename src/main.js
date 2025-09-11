import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.component('async-example', (resolve) => {
// 	require(['./components/'], resolve);
// });

new Vue({
  render: h => h(App),
}).$mount('#app')
