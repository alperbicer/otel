<template>
  <div>
    <div class="loader-wrap">
      <div class="pin"></div>
      <div class="pulse"></div>
    </div>
    <div id="main">
      <app-navbar />
      <nuxt />
      <app-footer></app-footer>
      <app-register></app-register>
    </div>
  </div>
</template>

<script>
import AppNavbar from '~/components/Navbar.vue';
import AppRegister from '~/components/Register.vue'
import AppFooter from '~/components/Footer.vue'

export default {
  components: {
    AppNavbar,
    AppRegister,
		AppFooter
  }
}
</script>


<style>
:root {
  --main-bg-color: red;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
