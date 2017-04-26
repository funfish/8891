const home = r => require.ensure([], () => r(require('./page/home/home.vue')), 'home')
const filter = r => require.ensure([], () => r(require('./page/filter/filter.vue')), 'filter')
const filterResult = r => require.ensure([], () => r(require('./page/filter/filterResult.vue')), 'filterResult')


export default [{
		path: '',
		redirect: '/home'
	}, {
		path: '/home',
        component: home
	}, {
		path: '/filter',
		component: filter
	}, {
		path: '/filterResult',
		component: filterResult
	}
]