const configs = require('./webpack.config.js');
const webpack = require('webpack');
const ip = require('ip').address();
const pathTo = require('path');
const chalk = require('chalk');
configs[0].devServer = {
  contentBase: pathTo.join(__dirname, ''),
  compress: true,
  // hot: true,
  host: '0.0.0.0',
  public: ip + ':8080/web',
  publicPath: '/dist/',
  watchContentBase: true,
  watchOptions: {
    ignored: /node_modules/,
    
  }
};
configs[0].plugins.push(new webpack.HotModuleReplacementPlugin());
console.log('server is running! Please open ' + chalk.green('http://' + ip + ':8080/web/index.html'));
module.exports = configs[0];
