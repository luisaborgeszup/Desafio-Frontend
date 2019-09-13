'use strict'

const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const devMode = process.env.NODE_ENV !== 'production'

const commonConfig = require('./webpack.common')

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    commonConfig.entry
  ],
  output: Object.assign({}, commonConfig.output, {
    publicPath: ''
  }),
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      ignoreOrder: true
    }),
    new HtmlPlugin(commonConfig.htmlPluginConfig)
  ],
  module: {
    rules: [
      commonConfig.jsLoader,
      commonConfig.cssAndSassLoader,
      commonConfig.fontLoader,
      commonConfig.fontAndImageLoader
    ]
  },
  resolve: commonConfig.resolve
}
