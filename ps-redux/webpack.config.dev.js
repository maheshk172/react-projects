const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
  mode: 'development', //dev vs prod
  target: 'web', // web or nodejs
  devtool: 'cheap-module-source-map', //sourcemaps for browsers
  entry: './src/index',
  output: {
    path: path.resolve(__dirname + 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    // DevServer to server the HTMLs from Webpack in dev mode
    stats: 'minimal',
    overlay: true,
    historyApiFallback: true, // handles deep links
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      https: false
    }
  },
  plugins: [
    // Defines middlewares
    new webpack.DefinePlugin({
      // process.env.API_URL will be replaced with the actual url
      'process.env.API_URL': JSON.stringify('http://localhost:3001')
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
