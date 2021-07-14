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

app.get('/',verify, (req, res, next) => {
    res.status(200).json({"result":"สวัสดี น้องแฮม this is api"})
});

//app.get('/data/',verify, (req, res, next) => {
//    res.status(200).json([{"id":1,"name":"dev1"},{"id":2,"name":"dev2"},{"id":3,"name":"dev3"}])
//});

app.get('/data/',verify, (req, res, next) => {

    let bookings = [
        {
            "bookingID":1,
            "bookingNo":"BKC201205-0001",
            "bookingDate":new Date(),
            "documentTemplateCode":"BKG",
            "documentTemplateID":1,
            "documentTemplateTitleLocal":"เท็มเพลตทัวร์",
            "documentTemplateTitleGlobal":"Template Tour",   
            "documentID":1,
            "documentCode":"QT",
            "documentTitleLocal":"ใบจองทัวร์",
            "documentTitleGlobal":"BOOKING CONFIRMATION",            
            "documentABB":"QTA",
            "documentCopyID":1,
            "documentCopyTitleLocal":"ต้นฉบับ",
            "documentCopyTitleLocal":"Original",        
            "documentnote":[
                                {
                                    "documentNoteID":1,
                                    "documentNoteDescription":"1. รายการทัวร์ข้างต้นรวมภาษีมูลค่าเพิ่ม 7% และหักภาษี ณ ที่จ่าย 3%",
                                    "documentID":1
                                },
                                {
                                    "documentNoteID":2,
                                    "documentNoteDescription":"2. เรื่องเงื่อนไขการยกเลิก",
                                    "documentID":1
                                }
                            ]
        }
        ];
      
    
    res.status(200).json(bookings)
});

app.get('/invoice/', (req, res, next) =>{
    res.status(200).json([{"id":1}])
    
});

app.listen(process.env.PORT || 3000, 
    () => console.log("Server is running..."));
    
module.exports = app;


