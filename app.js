const express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors') // เรียกใช้งาน core module
var verify = require('./core/verify-request')
var multer = require('multer');
var upload = multer();
app.use(cors()) 
//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(upload.array()); 
app.post('/post',(req, res, next)=>{   
    res.json({result:"OK",body:req.body})
})


function addDate(day){ 
    let date = new Date()
    date.setDate(date.getDate() + day)
    return date
}

aap.get('/sectionofgoods'),(req,res,next)=>{

       res.status(200).json({"result":"สวัสดี น้องแฮม this is api"}) 
    
});

app.get('/categoryofgoods',(req,res,next)=>{

       res.status(200).json({"result":"สวัสดี น้องแฮม this is api"}) 
});



app.get('/typeofgoods',(req,res,next)=>{

       res.status(200).json({"result":"สวัสดี น้องแฮม this is api"})     
});



app.get('/goods',(req,res,next)=>{
    let goods=[
        {
            "goodsID":1
        }
    ]
       res.status(200).json(goods)         
});


app.get('/',verify, (req, res, next) => {
    res.status(200).json({"result":"สวัสดี น้องแฮม this is api"})
});


app.get('/producttemplate', (req, res, next) => {
  
    res.status(200).json({"result":"สวัสดี น้องแฮม this is api"})
});



app.get('/data/',verify, (req, res, next) => {  
    res.status(200).json({"result":"สวัสดี น้องแฮม this is api"})
});

app.get('/invoice/', (req, res, next) =>{
    res.status(200).json([{"id":1}])
    
});

app.listen(process.env.PORT || 3000, 
    () => console.log("Server is running..."));
    
module.exports = app;


