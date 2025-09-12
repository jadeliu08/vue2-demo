import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home/index.vue';
import About from './components/About/index.vue';
import Detail from './components/Detail/index.vue';
import User from './components/User/index.vue';

Vue.use(VueRouter);
const routes = [
	{ path: '/', component: Home },
	{ path: '/detail', component: Detail },
	{ path: '/about', component: About },
	{
		path: '/user', component: User,
		children: [
			{ path: '', component: { render: (h) => h('div', null, 'default') } },
			{ path: 'profile', component: { render: (h) => h('div', null, 'profile') } },
			{ path: 'post', component: { render: (h) => h('div', null, 'post') } }
		]
	},
];
const router = new VueRouter({ mode: 'hash', routes });

export default router;