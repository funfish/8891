<template>
<div>
	<header class="nav-filter clear">
		<router-link to="/home">
			<返回
		</router-link>
		<div>
			筛选
		</div>
		<button>
			完成
		</button>
	</header>	
	<section class="filter">
		<ul class="clear">
			<li>
				<header>
					厂牌-车系
					<button>
						请选择
					</button>
				</header>
			</li>
			<li>
				<header>
					地区
					<button>
						请选择
					</button>
				</header>
			</li>
			<li>
				<header>
					价格
					<div class="price">
						不限
					</div>
				</header>
				<div id="column" class="choose">
					
				</div>
			</li>
			<li>
				<ul>
					<li v-for="(item, index) in select">
						<header>
							{{ item.name }}
						</header>
						<ul class="choose clear">
							<li v-for="(option, i) in item[item.type]"  class="choose-button" :class="{ chooseactive: item[item.type + 'Choose'][i] }" @click="selectItem(index, i, option)">
								{{ option }}
							</li>
						</ul>
					</li>
				</ul>
			</li>						
		</ul>
		<div id="filterResult">
			<div @click="clearSelected">
				清除
			</div>
			<router-link to="/filterResult">
				<div>
					有{{ total }}俩车符合要求
				</div>
			</router-link>
		</div>
	</section>	
</div>
</template>

<script>
	export default {
		data() {
			return {
				select: [{
					type: 'exhaust',
					name: '排气量',
					exhaust: ['1.6L以下', '1.6L-1.8L', '1.8L-2.0L', '2.0L-2.4L', '2.4L-3.0L', '3.0L以上'],
					exhaustChoose: [false, false, false, false, false, false],
				}, {
					type: 'people',
					name: '乘客数',
					people: ['2座', '3座', '4座', '5座', '6座', '7座', '8座', '9座'],
					peopleChoose: [false, false, false, false, false, false, false, false],
				}]
			}
		},
		computed: {
			filter() {
				return this.$store.state.filter
			},
			total() {
				return this.$store.state.total
			}
		},
		beforeCreate() {
			this.$store.commit('clearFilter')
			this.$store.dispatch('filter')
		},
		methods: {
			selectItem(index, i, option) {
				this.select[index][this.select[index].type + 'Choose'].forEach((value, i) => {
						if(value) {
							this.select[index][this.select[index].type + 'Choose'][i] = false;
						}
				})
				let targetValue = !this.select[index][this.select[index].type + 'Choose'][i];
				this.select[index][this.select[index].type + 'Choose'].splice(i, 1, targetValue);
				this.$store.commit('addFilter', { type: this.select[index].type, option, targetValue });
				this.$store.dispatch('filter')
			},
			clearSelected() {
				this.select[0].exhaustChoose = [false, false, false, false, false];
				this.select[0].exhaustChoose.push(false);
				this.select[1].peopleChoose = [false, false, false, false, false, false, false];
				this.select[1].peopleChoose.push(false);
				this.$store.commit('clearFilter');
				this.$store.dispatch('filter');
			}
		}
	}
</script>
<style lang="sass">
	@import '../../style/filter';
</style>