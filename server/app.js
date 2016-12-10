var express = require('express');
var appConfig = require('./appConfig');

var app = express();
appConfig.port(app);
appConfig.webpack(app);
appConfig.routes(app);
appConfig.errorHandlers(app);

module.exports = app;
