var handle404 = function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
};

var handleGeneralError = function(err, req, res, next) {
  res.status(err.status || 500);

  if (req.xhr) {
    res.json({ err: err });
  } else {
    // TODO:error handling template does not exist
    res.render('errors/debug', {
      message: err.message,
      error: err
    });
  }
};

module.exports = {
  handle404: handle404,
  handleGeneralError: handleGeneralError
};
