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
      { rel: 'stylesheet', href: '/fonts/index.css'}
    ],
    script: [
        { src: 'https://mock.qikan.net/jr-qrcode/1.1.0/jr-qrcode.js' }
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
  plugins: [
      { src: '~plugins/vuetify.js', ssr: true },
      { src: '~plugins/swiper.js', ssr: false },
    //   { src: '~plugins/qrcode.js', ssr: false }
  ],
  css: [
      { src: '~assets/style/app.styl', lang: 'styl' },
      { src: '~assets/style/main.css' },
      { src: 'swiper/dist/css/swiper.css' }
  ]
}
