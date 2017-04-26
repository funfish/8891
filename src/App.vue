<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {

			}
		}
	}
</script>

<style lang="sass">
	@import './style/veriable';
	html {
		font-size: 100px;
	}
	body {
		margin: 0;
		font-size: .12rem;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	li {
		list-style: none;
	}
	.clear:after {
		clear: both;
		content: "";
		display: table;
	}
	i {
		font-style: normal;
	}
	button {
		margin: 0;
		padding: 0;
		text-align: center;
		background-color: inherit;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
</style>