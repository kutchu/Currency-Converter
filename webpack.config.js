var path = require('path');
var webpack = require('webpack')
var ROOT = path.resolve(__dirname, 'src/main/');
var LIB = path.resolve(__dirname, 'src/main/lib');
var SRC = path.resolve(ROOT, 'js');
var DEST = path.resolve(__dirname, 'src/main/resources/static/app/dist');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: {
    app: SRC + '/main.js'
//    technicianMessenger: SRC + '/views/technicianMessenger.js',
//    accounts: SRC + '/views/accounts.js',
//    login: SRC + '/login.js',
//    semantic: LIB + '/js/semantic.min.js'
  },
  output: {
    path: DEST,
    filename: '[name].bundle.js',
    publicPath: '/app/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,  // Notice the regex here. We're matching on js and jsx files.
        loaders: ['babel-loader?presets[]=env'],
        include: SRC
      },

      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
        loader: 'url-loader?limit=1024&name=[name]-[hash:8].[ext]!image-webpack-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../css/[name].css")
  ]
};