<template>
<div>
	<header class="nav-filter clear">
		<router-link to="/filter">
			<返回
		</router-link>
		<div>
			筛选结果			
		</div>
		<button>
			首页
		</button>
	</header>
	<section>
		<header class="car-select-title">
			共有{{ total }}个车型
		</header>
		<ul class="car-list">
			<li v-for="item in carFilterList">
				<router-link to="" class="clear">
					<div :style="{ background: item.url, backgroundSize: 'cover' }"></div>
					<div class="car-description">
						<span>{{ item.name }}</span>
						<br>
						<span>{{ item.price }}</span>
					</div>
				</router-link>
			</li>
		</ul>
	</section>
	<foot></foot>
</div>
</template>
<script>
	export default {
		data() {
			return {
				page: 1
			}
		},
		computed: {
			total() {
				return this.$store.state.total
			},
			carFilterList() {
				return this.$store.state.carFilterList
			},
			carFinished() {
				return this.$store.state.carFinished
			}
		},
		beforeCreate() {
			this.$store.dispatch('filter', {to: false, page: 1})
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},
		methods: {
			handleScroll() {
				if(document.body.clientHeight - window.pageYOffset < 
					(document.documentElement.clientHeight || Window.innerHeight) + 200) {
					if(this.page * 10 < this.total && this.carFinished) {
						this.$store.dispatch('filter', {to: false, page: this.page})
					}
				}
			}
		}
	}
</script>
<style lang="sass">
	@import '../../style/filterResult';
</style>