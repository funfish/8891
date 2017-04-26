<template>
<div>
	<header class="nav">
		<img src="../../assets/logo.png" class="logo" />
		<form action="get">
			<input type="search" placeholder="请输入车款/车行名">
		</form>
		<button>
			登入
		</button>
	</header>
	<section class="wrap">
		<ul class="clear" @touchmove="touchMove" @touchstart="touchStart" @touchend="touchEnd" :style="{ transform: 'translateX(' + diff + 'rem)' }">
			<router-link to="">
				<li class="slid1">					
				</li>
			</router-link>
			<router-link to="">
				<li class="slid2">					
				</li>
			</router-link>
			<router-link to="">
				<li class="slid3">					
				</li>
			</router-link>			
		</ul>
		<ul class="list-ico">
			<li :class="{ slidactive: current === 0 }"></li>
			<li :class="{ slidactive: current === -3.2 }"></li>
			<li :class="{ slidactive: current === -6.4 }"></li>
		</ul>
	</section>
	<ul class="partition clear">
		<li class="item" v-for="(item, index) in partitionClass">
			<router-link :to="item">
				<div :class="item"></div>
				<strong>
					{{ partition[index] }}
				</strong>
			</router-link>
		</li>
	</ul>
	<section class="list clear">
		<header>
			<span class="deepBlue">
				热门新车
			</span>
			<router-link to="">
				<span>
					更多
				</span>
			</router-link>		
		</header>
		<ul class="clear">
			<li class="item" v-for="item in list10">
				<router-link to="">
					<div :style="{ background: item.url, backgroundSize: 'cover' }">
					</div>
					<div class="item-title">
						{{ item.name }}
					</div>
					<span>
						{{ item.price }}
					</span>
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
				partitionClass: ['brand', 'factory', 'price', 'filter', 'new', 'condition'],
				partition: ['厂牌搜索', '车行搜索', '价格搜索', '更多搜索', '新车厂牌', '条件选新车'],
				diff: 0,
				current: 0,
				touchArry: [0, 0],
			}
		},
		computed: {
			list10() {
				return this.$store.state.limit10
			}
		},
		beforeCreate() {
			this.$store.dispatch('getDate', {url: "/newcarapi/kind/?first=10&limit=10&sort=default&api=2.8", type:'limit10'});
		},
		methods: {
			touchMove(e) {
				const event = e || window.event;
				Window.event ? Window.event.returnValue = flase : event.preventDefault();
				let touch = e.touches[0];
				this.touchArry[1] = touch.pageX; 
				if(this.diff >= -6.4 && this.diff <= 0) {
					this.diff = this.current + (this.touchArry[1] - this.touchArry[0]) / 100
				}
			},
			touchStart(e) {
				const event = e || window.event;
				Window.event ? Window.event.returnValue = flase : event.preventDefault();
				this.touchArry[0] = e.touches[0].pageX;
			},
			touchEnd(e) {
				const event = e || window.event;
				Window.event ? Window.event.returnValue = flase : event.preventDefault();
				if(this.touchArry[1] - this.touchArry[0] > 50 && this.current < 0) {
					this.current += 3.2;
				}
				if(this.touchArry[1] - this.touchArry[0] < -50 && this.current > -5) {
					this.current -= 3.2;
				}
				this.diff = this.current;
			}
		}
	}
</script>
<style lang="sass">
	@import '../../style/home';
</style>