var errorHandlers = require('./errorHandlers');


var express = require('express');
var path = require('path');

var webpackConfig = require('../webpack.config');
var routes = require('./routes');
var config = require('../config');

exports.port = function(app) {
  app.set('port', config.express.port);
};

exports.webpack = function(app) {
  if (process.env.NODE_ENV === 'development') {
    var compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler));
  }
}

exports.routes = function(app) {
  app.use('/', routes);
};

exports.errorHandlers = function (app) {
  // catch 404 and forward to error handler
  app.use(errorHandlers.handle404);
  app.use(errorHandlers.handleGeneralError);
};
