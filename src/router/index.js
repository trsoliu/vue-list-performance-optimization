import Vue from 'vue'
import Router from 'vue-router'
import Normal from '@/views/Normal'
import Optimize from '@/views/Optimize'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/normal',
			name: 'normal',
			component: Normal
		}, {
			path: '/optimize',
			name: 'optimize',
			component: Optimize
		},
	]
})