const pkg = require('./package')


module.exports = {
  mode: 'universal',

  router: { base: '/alperbicer.com/otel' },

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
			{ src: '/js/jquery.min.js' },
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
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
 css: [
   '~assets/scss/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
