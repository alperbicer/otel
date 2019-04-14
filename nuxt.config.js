const pkg = require('./package')


module.exports = {
  mode: 'universal',

  router: {
    middleware: ['auth']
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
			{ src: '/js/jquery.min.js' },
			{ src: '/js/plugins.js' },
			{ src: '/js/scripts.js' },
			{ src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDwJSRi0zFjDemECmFl9JtRj1FY7TiTRRo&libraries=places&callback=initAutocomplete' },
		],
    link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=latin-ext' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/color.css' },
      { rel: 'stylesheet', href: '/css/plugins.css' },
      { rel: 'stylesheet', href: '/css/reset.css' }
		]
  },

  /*
  ** Customize the progress-bar color
  */
 loading: '~/components/Loading.vue',

  /*
  ** Global CSS
  */
 css: [
   '~/assets/scss/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
 plugins: ['~plugins/vee.js',{ src:'~plugins/spinners.js', ssr: false },{ src:'~plugins/auth.js', ssr: false },'~plugins/axios.js'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  axios: {
    baseURL: '/alperbicer.com'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/user/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: {url: '/user/user', method: 'get', propertyName: 'data'},
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      },
      facebook: {
        client_id: '',
        userinfo_endpoint: false,
        scope: ['public_profile', 'email'],
        redirect_uri:'http://localhost:3000/callback'
      },
      google: {
        client_id: '',
        user:false,
        redirect_uri:'http://localhost:3000/callback'

      },
    },
    redirect: {
      login: '/?login=1',
      logout: '/',
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   vendor: ['vee-validate'],
    extend(config, ctx) {
    }
  }
}
