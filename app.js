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


app.get('/',verify, (req, res, next) => {
    res.status(200).json({"result":"สวัสดี น้องแฮม this is api"})
});

//app.get('/data/',verify, (req, res, next) => {
//    res.status(200).json([{"id":1,"name":"dev1"},{"id":2,"name":"dev2"},{"id":3,"name":"dev3"}])
//});

//            "documentTemplateInfo":
//                                    {
//                                        "tourID":2,
//                                        "tourCode":"ZCGD01",
//                                        "tourName":"เลสโก จิ๋นซี ยกทัพ",
//                                        "programeTourName":"จีน เจ้งโจว ซีอาน สั่วหยาง",
//                                        "tourDay":5,
//                                        "tourNight":6





app.get('/data/',verify, (req, res, next) => {
let bookings = [
        {
            "companyID":1,
            "companyCode":"11/05844",
            "companyNameLocal":"บริษัท ซีโก้ ทราเวล จำกัด (สำนักงานใหญ่)",
            "companyNameGlobal":"ZEGO TRAVEL CO,.LTD.",
            "companyTel":"02-408-8001 (60 คู่สาย)",
            "companyFax":"02-070-6626-7",
            "companyEmail":"info@zegotravel.com",
            "companyAddressSec1Local":"22/7-9 ซ.นนทรี 10 ถ.นนทรี แขวงช่องนนทรี เขตยานนาวา กรุงเทพมหานคร 10120",
            "companyAddressSec1Global":"22/7-9 Nonsri 10, Nonsri Rd., Chongnonsri, Yannawa, Bangkok 10120",
            "companyTaxID":"0105552023586",
            "branchID":1,
            "branchCode":"11/05844",
            "branchNameLocal":"บริษัท ซีโก้ ทราเวล จำกัด (สำนักงานใหญ่)",
            "branchNameGlobal":"ZEGO TRAVEL CO,.LTD.",
            "branchTel":"02-408-8001 (60 คู่สาย)",
            "branchFax":"02-070-6626-7",
            "branchEmail":"info@zegotravel.com",
            "companyAddressSec1Local":"22/7-9 ซ.นนทรี 10 ถ.นนทรี แขวงช่องนนทรี เขตยานนาวา กรุงเทพมหานคร 10120",
            "companyAddressSec1Global":"22/7-9 Nonsri 10, Nonsri Rd., Chongnonsri, Yannawa, Bangkok 10120",
            "companyTaxID":"0105552023586",
            "bookingID":1,
            "bookingNo":"BKC201205-0001",
            "bookingStatus":1,
            "bookingActive":1,
            "bookingGuaranteeID":1,
            "bookingType":"I",
            "bookingRemark1":"",
            "bookingRemark2":"",
            "bookingCurrencyID":1.0000,
            "bookingCurrencyCode":"BHT",
            "bookingCurrencyRate":1,
            "bookingDate":new Date(),
            "bookingExpire":addDate(5),
            "saleBy":2,
            "saleName":"คุณพลอย",
            "saleTel":"02-408-8001 #2005",
            "saleEmail":"02-408-8001 #2005",
            "documentTemplateKeyRef":2,
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
            "documentCopyTitleGlobal":"Original", 
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
            "documentSignatureID":2,
            "documentSignatureDetails":[
                                        {   
                                            "signatureID":1,
                                            "signatureSec1Local":"ผู้จัดทำ / Prepared by",
                                            "signatureSec1Global":"ผู้จัดทำ / Prepared by",
                                            "signatureSec2Local":"วันที่ / Date",
                                            "signatureSec2Global":"วันที่ / Date"
                                        },
                                        {   
                                            "signatureID":2,
                                            "signatureSec1Local":"พนักงานขาย / Salesman",
                                            "signatureSec1Global":"พนักงานขาย / Salesman",
                                            "signatureSec2Local":"วันที่ / Date",
                                            "signatureSec2Global":"วันที่ / Date"
                                        },
                                        {   
                                            "signatureID":3,
                                            "signatureSec1Local":"ลูกค้า / Cunsumer",
                                            "signatureSec1Global":"ลูกค้า / Cunsumer",
                                            "signatureSec2Local":"วันที่ / Date",
                                            "signatureSec2Global":"วันที่ / Date"
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


