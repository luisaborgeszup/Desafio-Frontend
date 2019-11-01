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
    template: path.join(__dirname, '..', 'src', 'html', 'index.html')
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
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: function () {
            return [
              require('autoprefixer')
            ];
          }
        }
      }
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
  ImageLoader: {
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader'],
  },
  resolve: {
    alias: {
      src: path.join(__dirname, '..', 'src'),
      components: path.join(__dirname, '..', 'src', 'components'),
      icons: path.join(__dirname, '..', 'icons')
    }
  }
}
  