// vue.config.js
const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  lintOnSave: false,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  }
}
