import ajax from '../library/ajax'

export default {
	getDate({ commit }, {url, type}) {
		ajax('GET', url).then(res => {
			commit(type, res);
		})
	},
	filter({ commit, state }, {to = 1, page = 1} = {}) {
		let c = parseInt(state.filter.people) || '',
			  min_gas,
			  max_gas,
			  url;
		if(state.filter.exhaust.length < 8) {
			if(parseFloat(state.filter.exhaust) < 2) {
				min_gas = 0;
				max_gas = parseFloat(state.filter.exhaust);
			}else {
				min_gas = parseFloat(state.filter.exhaust);
				max_gas = 20;
			}
		}else {
			min_gas = parseFloat(state.filter.exhaust);
			max_gas = parseFloat(state.filter.exhaust.slice(5, 8));
		}
		if(to === 1) {
			url = '/api/v1/kind/?to=' + to + '&c=' + c + '&min_gas=' + min_gas + '&max_gas=' + max_gas;
			ajax('GET', url).then(res => {
				state.total = res.total
			})				
		} else {
			state.carFinished = false;
			url = '/api/v1/kind/?sort=default&page=' + page +'&c=' + c + '&min_gas=' + min_gas + '&max_gas=' + max_gas;
			ajax('GET', url).then(res => {
				commit('carFilterList' ,res)
			})	
		}		
	}
}