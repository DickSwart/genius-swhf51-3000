var cookieParser = require('cookie-parser');
var createError = require('http-errors');
var express = require('express');
var lircNode = require('lirc_node');
var logger = require('morgan');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');
var swaggerDocument = require('./extras/swagger.json');
var swaggerUi = require('swagger-ui-express');

// routes
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

// set the default remote name for lircNode
lircNode.defaultRemoteName = 'GeniusSW-HF5.1-3000';
// based on node environment, initialize connection to lircNode or use test data
if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
  lircNode.remotes = require(__dirname + '/test/data/remotes.json');
} else {
  lircNode.init();
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to adjust req
app.use('/api/v1', function(req, res, next) {
  req.lircNode = lircNode;
  next();
});

app.use('/', indexRouter);
app.use('/api/v1', apiRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { customCssUrl: '/css/swaggerUi.css', customJs: '/js/swaggerUi.js' }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.isDev = req.app.get('env') === 'development';
  res.locals.error = err;

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;