import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // ⚠️ Vue 2.x 时代需要显式调用 Vue.use(Vuex)

export default new Vuex.Store({
	// 1. 状态：应用的数据
	state: { // 注意这里是对象字面量，不是函数
		count: 0,
		username: 'Guest'
	},

	// 2. Getter：派生状态
	getters: {
		doubleCount(state) {
			return state.count * 2;
		}
	},

	// 3. Mutation：同步修改 State
	mutations: {
		increment(state, payload = 1) {
			state.count += payload;
		},
		setUsername(state, name) {
			state.username = name;
		}
	},

	// 4. Action：处理异步或复杂逻辑
	actions: {
		asyncIncrement(context, payload) {
			return new Promise(resolve => {
				setTimeout(() => {
					context.commit('increment', payload);
					resolve();
				}, 1000);
			});
		}
	},

	// 5. Module (暂时不用)
	modules: {}
});