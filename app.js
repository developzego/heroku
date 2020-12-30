const express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors') // เรียกใช้งาน core module
var logger = require('morgan');
var verify = require('./core/verify-request')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors()) 
app.use(logger('dev'));

//Middleware 
app.use(express.json());

app.post('/post',(req, res, next)=>{

    res.json({result:"OK",body:req.body.data})
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


