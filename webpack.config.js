'use strict';

var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index.js',
    './index.html'
  ],
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
    publicPath: ''
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?stage=0']
      },
      {
        test: /index\.html$/,
        loader: 'file?name=index.html'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file?name=assets/[hash].[ext]"
      }
    ]
  }
};
