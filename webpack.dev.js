const configs = require('./webpack.config.js');
const ip = require('ip').address();
const pathTo = require('path');
const chalk = require('chalk');
configs[0].devServer = {
  contentBase: pathTo.join(__dirname, ''),
  compress: true,
  hotOnly: true,
  host: '0.0.0.0',
  public: ip + ':8080/web',
};
console.log('server is running! Please open ' + chalk.green('http://' + ip + ':8080/web/index.html'));
module.exports = configs[0];
