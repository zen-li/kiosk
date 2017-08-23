/* eslint-disable */
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '数字书刊亭vNext MVP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The next gerneration of digital magazine kiosk' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.cat.net/css?family=Roboto:300,400,500,700|Material+Icons'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
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
    },
    /*
    ** Load external packages
    */
    vendor: ['vuetify', 'axios']
  },
  plugins: ['~plugins/vuetify.js'],
  css: [
      { src: '~assets/style/app.styl', lang: 'styl' }
  ]
}
