<template>
<div>
	<section class="gradient clear">
		<router-link to="">
			<span>登入</span>
		</router-link>
		<span @click="scrollTop">Top ↑</span>
	</section>
	<footer>
		<ul class="clear">
			<li>
				<router-link to="">
					首页
				</router-link>
			</li>
			<li>
				<router-link to="">
					意见反馈
				</router-link>
			</li>
			<li>
				<router-link to="">
					关于我们
				</router-link>
			</li>
			<li>
				<router-link to="">
					电脑版
				</router-link>
			</li>
		</ul>
		<div id="copyRight">
			Copyright © 2009-2015 by Addcn Technology Co., Ltd.
			<br>
			All Rights reserved.
		</div>
	</footer>
</div>
</template>
<script>
	export default {
		name: 'foot',
		methods: {
			scrollTop() {
				window.scroll(0, 0)
			}
		}
	}
</script>
<style lang="sass">
	@import '../style/foot';
</style>