<template>
  <div>
		<div id="wrapper">
			<div class="content">
				<app-search></app-search>
				<app-most-city></app-most-city>
				<app-popular-listing></app-popular-listing>
			</div>
		</div>
		<a class="to-top">
			<i class="fa fa-angle-up"></i>
		</a>
  </div>
</template>

<script>
import AppSearch from '~/components/Search.vue';
import AppMostCity from '~/components/MostCity.vue';
import AppPopularListing from '~/components/PopularListing.vue';

export default {
	components: {
		AppSearch,
		AppMostCity,
		AppPopularListing,
	},
}
</script>

<style lang="scss" scoped>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	.title {
		font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		display: block;
		font-weight: 300;
		font-size: 100px;
		color: red;
		letter-spacing: 1px;
	}
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>
