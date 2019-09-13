'use strict'

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const commonConfig = require('./webpack.common')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: commonConfig.entry,
  output: commonConfig.output,
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.s?css$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.optimize\.(sa|sc|c)ss$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        },
        canPrint: true
      }),
      new UglifyJsPlugin({
        uglifyOptions: { warnings: false}
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? 'styles.css' : 'styles.[hash].css',
      ignoreOrder: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new HtmlPlugin(commonConfig.htmlPluginConfig)
  ],
  module: {
    rules: [
      commonConfig.jsLoader,
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      commonConfig.fontLoader,
      commonConfig.fontAndImageLoader
    ]
  },
  resolve: commonConfig.resolve
}
