import Vue from "vue";
import VueRouter from 'vue-router';

import Home from "./components/Home/index.vue";
import About from "./components/About/index.vue";
import Detail from "./components/Detail/index.vue";

Vue.use(VueRouter);
const routes = [
	{path: '/', component: Home},
	{path: '/detail', component: Detail},
	{path: '/about', component: About},
];
const router = new VueRouter({mode: 'hash', routes});

export default router;