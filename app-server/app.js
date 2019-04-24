const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();
require('./models/db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const levelsRouter = require('./routes/levels');
const adminRouter = require('./routes/admin');
const submissionRouter = require('./routes/submission');

const bearerMiddleware = require('./middlewares/bearer');
const userquizesRouter = require('./routes/userquizes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bearerMiddleware);

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/levels', levelsRouter);
app.use('/api/submission/', submissionRouter);
app.use('/api/admin/', adminRouter);
app.use('/api/userquizes/', userquizesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  //res.locals.message = err.msg;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
  //res.render('error');
});

// module.exports = app;
app.listen(5000, () => console.log("Listening to port 5000"));
