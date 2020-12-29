const express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors') // เรียกใช้งาน core module
var logger = require('morgan');
var verify = require('./core/verify-request')
var bodyParser = require('body-parser')

app.use(cors()) 


// parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


//Middleware 
app.use(express.json());

app.post('/post',(req, res, next)=>{
    let o = JSON.parse(req.body)
    res.json({result:"OK",body:o})
})
app.get('/',verify, (req, res, next) => {
    res.status(200).json({"result":"สวัสดี น้องแฮม this is api"})
});
app.get('/data/',verify, (req, res, next) => {
    res.status(200).json([{"id":1,"name":"dev1"},{"id":2,"name":"dev2"},{"id":3,"name":"dev3"}])
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.status(404).json({err:'API Not Found '})
  });
app.use(function(req,res){
    res.status(404).json({err:'API Not Found '})
});


app.listen(process.env.PORT || 3000, 
    () => console.log("Server is running..."));
    
module.exports = app;


