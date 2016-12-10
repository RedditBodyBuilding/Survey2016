var app = require('./server/app');
var config = require('./config')
var port = app.get('port');

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info(
      "==> 🌎  Listening on port %s. Open up http://%s:%s/ in your browser.",
      port,
      config.express.host,
      port
    )
  }
});


