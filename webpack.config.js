'use strict';

var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: [
    './index.js',
    './index.html'
  ],
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?stage=0']
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
