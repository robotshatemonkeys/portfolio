module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Robots Hate Monkeys',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'rhm portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    middleware: 'i18n'
  },
  /*
  ** plugins
  */
  plugins: [
    // Will inject the plugin in the $root app and also in the context as `i18n`
    { src: '~plugins/i18n.js', injectAs: 'i18n' }
  ],

  /*
  ** Customize the progress-bar color
  */

  loading: { color: '#3B8070' },
  /*
  ** Global CSS
  */

  css: [
    'normalize.css',
    '~assets/css/default.scss'
  ],
/*
** Build configuration
*/
  generate: {
    routes: ['/', '/about', '/es', '/es/about']
  },

  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
