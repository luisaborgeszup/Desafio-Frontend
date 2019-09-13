'use strict'

const path = require('path')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index'),
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name]-[hash].js'
  },
  htmlPluginConfig: {
    title: 'Github App',
    template: path.join(__dirname, '..', 'src', 'html', 'template.html')
  },
  jsLoader:  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    include: /src/,
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react', '@babel/preset-env'],
      plugins: ['react-hot-loader/babel']
    }
  },
  cssAndSassLoader: {
    test: /\.(sa|sc|c)ss$/,
    use: [
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
  },
  fontLoader: {
    test: /\.(ttf|eot|woff|woff2)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]'
      }
    }
  },
  fontAndImageLoader: {
    test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 50000,
        mimetype: 'application/font-woff',
        name: './fonts/[name].[ext]',
        publicPath: '../'
      }
    }
  },
  resolve: {
    alias: {
      src: path.join(__dirname, '..', 'src'),
      components: path.join(__dirname, '..', 'src', 'components')
    }
  }
}
  