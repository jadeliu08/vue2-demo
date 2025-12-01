import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;

// Vue.component('async-example', (resolve) => {
// 	require(['./components/'], resolve);
// });

new Vue({
	name: 'appRoot',
	render: h => h(App),
	router: router,
	store,
}).$mount('#app');
