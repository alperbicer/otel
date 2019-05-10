const pkg = require('./package');
const nodeExternals = require('webpack-node-externals');

module.exports = {
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=latin-ext' },
      { rel: 'stylesheet', href: 'css/reset.css' },
      { rel: 'stylesheet', href: 'css/plugins.css' },
      { rel: 'stylesheet', href: 'css/style.css' },
      { rel: 'stylesheet', href: 'css/color.css' }
    ],
    script: [
      { src: 'js/jquery.min.js', body: true },
      { src: 'js/plugins.js', body: true },
      { src: 'js/scripts.js', body: true },
      { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA4-GoZzOqYTvxMe52YQZch5JaCFN6ACLg&libraries=places' },
      { src: 'js/map_infobox.js', body: true },
      { src: 'js/markerclusterer.js', body: true },
      { src: 'js/maps.js', body: true }
    ],
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
    baseURL: 'http://acayiptarifler.xyz/api/'
  },
  plugins: [
    '~/plugins/vee.js',
    { src: '~/plugins/spinners.js', ssr: false },
    '~/plugins/axios.js',
    { src: '~/plugins/vue-slick', ssr: false }
  ],
  loading: '~/components/Loading.vue',
  css: [
    '~/assets/scss/main.scss',
  ],
  build: {
    publicPath: '/assets/',
    vendor: ['vee-validate', 'vue-slick'],
    transpile: ['vue-slick'],
    extend(config, { isClient, isServer }) {
      if (isClient) {
        config.devtool = '#source-map';
      }
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    },
    loaders: [
      {
        test: /\.(scss|sass|css)$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  
}
