export default {
	addFilter(state, { type, option, targetValue}) {
		state.filter[type] = targetValue ? option : '';
	},
	limit10(state, res) {
		state.limit10 = [];
		for(let i = 0; i < 10; i++) {
			state.limit10.push({
				name: res.data[i].brandName + '-' + res.data[i].kindName,
				price: res.data[i].price,
				url: 'url(' + res.data[i].thumb + ')'
			})
		}
	},
	clearFilter(state) {
		state.filter.exhaust = '0.0L-20L';
		state.filter.people = '';
		state.carFilterList = [];
	},
	carFilterList(state, res) {
		for(let i = 0; i < 10; i++) {
			if(res.data[i]) {
				state.carFilterList.push({
					name: res.data[i].brandName + '-' + res.data[i].kindName,
					price: res.data[i].price,
					url: 'url(' + res.data[i].thumb + ')'
				})
			} else {
				break;
			}
		}
		state.carFinished = true;
	},
}