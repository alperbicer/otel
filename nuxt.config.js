const pkg = require('./package')

module.exports = {
  mode: 'universal',
  router: {
    middleware: ['auth']
  },
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
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
  ],
  toast: {
    position: 'top-right',
    duration: 2000
  },
  auth: {
    plugins: [
      { src: '~/plugins/auth.js', ssr: false },
    ],
    strategies: {
      local: {
        endpoints: {
          login: { url: '/user/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: '/user/user', method: 'get', propertyName: 'data' },
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      },
      facebook: {
        client_id: '418711215595987',
        userinfo_endpoint: false,
        scope: ['public_profile', 'email'],
        redirect_uri: 'http://localhost:3000/callback'
      },
      google: {
        client_id: '995057249527-rrj7dtc29c9b7jg0slk6j3kudl992nge.apps.googleusercontent.com',
        user: false,
        redirect_uri: 'http://localhost:3000/callback'
      },
    },
    redirect: {
      login: '/?login=1',
      logout: '/',
    },
  },
  axios: {
    baseURL: 'https://private-1e6b1d-tfr.apiary-mock.com/Product/GetProductById/1'
  },
  plugins: [
    '~/plugins/vee.js',
    { src: '~/plugins/spinners.js', ssr: false },
    '~/plugins/axios.js'
  ],
  loading: '~/components/Loading.vue',
  css: [
    '~/assets/scss/main.scss',
  ],
  build: {
    vendor: ['vee-validate'],
    extend(config, ctx) {
    }
  }
}
