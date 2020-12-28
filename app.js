const express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
const app = express();
var logger = require('morgan');
var verify = require('./core/verify-request')
var bodyParser = require('body-parser')

//START DATABASE MONGO DB

//Route





// parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}); 



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




//Middleware 
app.use(express.json());

app.get('/',verify, (req, res, next) => {
    res.status(200).json({"app":"this is api"})
});
app.get('/data/',verify, (req, res, next) => {
    res.status(200).json({"id":1,"name":"dev1"},{"id":2,"name":"dev2"},{"id":3,"name":"dev3"})
});






//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.status(404).json({err:'API Not Found '})
  });
app.use(function(req,res){
    res.status(404).json({err:'API Not Found '})
});


app.listen(process.env.PORT);
module.exports = app;


