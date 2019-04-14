<template>
  <div>
    <!--loader-->
    <div class="loader-wrap">
      <div class="pin"></div>
      <div class="pulse"></div>
    </div>
    <!--loader end-->
    <!-- Main  -->
    <div id="main">
      <app-header></app-header>
      <!--  wrapper  -->
      <div id="wrapper">
        <!-- Content-->
        <div class="content">
					<app-search></app-search>
        </div>
        <!-- Content end -->
      </div>
      <!-- wrapper end -->
      <app-footer></app-footer>
      <app-register></app-register>
      <a class="to-top">
        <i class="fa fa-angle-up"></i>
      </a>
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/Header.vue'
import AppSearch from '~/components/Search.vue'
import AppRegister from '~/components/Register.vue'
import AppFooter from '~/components/Footer.vue'

export default {
		components: {
				AppHeader,
				AppSearch,
				AppRegister,
				AppFooter
		}
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
