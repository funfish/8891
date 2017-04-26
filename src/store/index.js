import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
	state: {
		limit10: [],
		filter: {
			exhaust: '0.0L-20L',
			people: ''
		},
		total: '',
		carFilterList: [],
		carFinished: false
	},
	getters,
	mutations,
	actions,
}