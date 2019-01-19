const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')

const entry = [
  '@babel/polyfill',
  // Include the main js only for webpack-serve
  './src/index.js',
]

const rules = [
  {
    test: /\.(js|jsx)$/,
    use: {
      loader: 'babel-loader',
    },
    include: [path.resolve(__dirname, 'src')],
    exclude: /node_modules/,
  },
  {
    test: /\.jsx?$/,
    enforce: 'pre',
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      emitWarning: true,
    },
  },
]

const resolve = {
  modules: ['node_modules', 'src'],
  extensions: ['.js', '.jsx'],
}

const devServer = {
  historyApiFallback: true,
}

let plugins = [
  new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
  }),
  new WebpackBuildNotifierPlugin({
    sound: false,
  }),
]

module.exports = {
  module: { rules },
  entry,
  resolve,
  plugins,
  devServer,
}
