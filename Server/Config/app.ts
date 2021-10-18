/*
* Author     : Min Li
* Date       : September 28, 2021
* Description: Min Li's personal website
*/

//Installed 3rd party packages
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

//only import mongo I need
import mongoose, {mongo } from 'mongoose';

import indexRouter from '../Routes/index';

//Express Web App Configuration
const app = express();
export default app; // exports app as the default Object for this module

// DB Configuration
import * as DBConfig from './db';
mongoose.connect(DBConfig.LocalURI, {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect(DBConfig.RemoteURI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection; // alias for the mongoose connection
db.on("error", function()
{
  console.error("Connection Error");
});

db.once("open", function()
{
  console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);
});


// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');  // express -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next:express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: 'Error'});
});

//module.exports = app;
