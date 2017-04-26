import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './routes'
import stores from './store'
import App from './App.vue'
import foot from './component/foot.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({routes})
const store = new Vuex.Store(stores)
Vue.component("foot", foot)
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
