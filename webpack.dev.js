const configs = require('./webpack.config.js');
const path = require('path');

configs[0].devServer = {
  contentBase: path.join(__dirname, ''),
  compress: true,
  hotOnly: true,
  port: 8080
};

