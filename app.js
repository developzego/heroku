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


app.get('/goodsgroup',(req,res,next)=>{
    let goodsgroups=[
        {
            "goodsGroupID":1,
            "goodsGroupCode":"G",
            "goodsGroupLocalInfo":"สินค้า",
            "goodsGroupGlobalInfo":"Goods",   
            "isActive":1,
            "isVisible":1
        },
        {
            "goodsGroupID":2,
            "goodsGroupCode":"S",
            "goodsGroupLocalInfo":"บริการ",
            "goodsGroupGlobalInfo":"Services",   
            "isActive":1,
            "isVisible":1
        }
    ]
       res.status(200).json(goodsgroups) 
});

app.get('/typeofgoods',(req,res,next)=>{
    let typeofgoods=[
        {
            "typeOfGoodsID":1,
            "typeOfGoodsCode":"I",
            "typeOfGoodsLocalInfo":"สินค้าทั่วไป เหมาะกับ ทอง ของสมนาคุณ กิฟวอเช่อ อุปกรณ์สำนักงาน หรือของแถมต่าง ๆ",
            "typeOfGoodsLocalInfo":"สินค้าทั่วไป เหมาะกับ ทอง ของสมนาคุณ กิฟวอเช่อ อุปกรณ์สำนักงาน หรือของแถมต่าง ๆ",
            "isActive":1,
            "isVisible":1
        },
        {
            "typeOfGoodsID":2,
            "typeOfGoodsCode":"S",
            "typeOfGoodsLocalInfo":"สินค้า/SET (สามารถนำเอาสินค้าอื่น ๆเข้าร่วมใน SET ได้เช่น ตั๋ว,แลนด์,บริการ เหมาะกับธุรกิจทัวร์)",
            "typeOfGoodsLocalInfo":"สินค้า/SET (สามารถนำเอาสินค้าอื่น ๆเข้าร่วมใน SET ได้เช่น ตั๋ว,แลนด์,บริการ เหมาะกับธุรกิจทัวร์)",
            "isActive":1,
            "isVisible":1
        },       
        {
            "typeOfGoodsID":3,
            "typeOfGoodsCode":"G",
            "typeOfGoodsLocalInfo":"สินค้า/กรุ๊ป เหมาะกับสินค้าประเภทแยกสี แยกลาย (เช่นเสื้อ POLO SIZE X 10 ตัว มีการแยกสีแดง 5 ตัว,ดำ 5 ตัว)",
            "typeOfGoodsLocalInfo":"สินค้า/กรุ๊ป เหมาะกับสินค้าประเภทแยกสี แยกลาย (เช่นเสื้อ POLO SIZE X 10 ตัว มีการแยกสีแดง 5 ตัว,ดำ 5 ตัว)",
            "isActive":1,
            "isVisible":1
        },
        {
            "typeOfGoodsID":4,
            "typeOfGoodsCode":"L",
            "typeOfGoodsLocalInfo":"สินค้า LOT (เหมาะกับธุรกิจผลิตอุปกรณ์ (ยังไม่ได้ใช้)",
            "typeOfGoodsLocalInfo":"สินค้า LOT (เหมาะกับธุรกิจผลิตอุปกรณ์ (ยังไม่ได้ใช้)" ,
            "isActive":1,
            "isVisible":1
        },
        {
            "typeOfGoodsID":5,
            "typeOfGoodsCode":"SN",
            "typeOfGoodsLocalInfo":"สินค้า SERIAL NUMBER เหมาะกับธุรกิจผลิตเช่นที่รหัสกับกับชื่อผลิตภัณฑ์เหมือนกันแต่คนละ Serial number เช่นอุปกรณ์ไอที ,RAM,CPU",
            "typeOfGoodsLocalInfo":"สินค้า SERIAL NUMBER เหมาะกับธุรกิจผลิตเช่นที่รหัสกับกับชื่อผลิตภัณฑ์เหมือนกันแต่คนละ Serial number เช่นอุปกรณ์ไอที ,RAM,CPU",
            "isActive":1,
            "isVisible":1
        }
    ]
       res.status(200).json(typeofgoods)     
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


//appget('/'


//app.get('/data/',verify, (req, res, next) => {
//    res.status(200).json([{"id":1,"name":"dev1"},{"id":2,"name":"dev2"},{"id":3,"name":"dev3"}])
//});

app.get('/producttemplate', (req, res, next) => {
    let data=[
        {
            "productTemplateID":1,
            "productTemplateCode":"BKG-00001",
            "productTemplateType":"G",
            "productTemplateUseStock":"N",
            "productTemplateDetail":"ผู้ใหญ่พักห้องละ 2 ท่าน ท่านละ",
            "productTemplateLabel":"ค่าทัวร์",
            "productCodeEX":"ADL",
            "productTemplateUnit":"คน"
        },
        {
            "productTemplateID":2
        },
        {
            "productTemplateID":3
        }
    ]
    res.status(200).json({"result":"สวัสดี น้องแฮม this is api"})
});



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
            "systemYear":2021,
            "systemPeriod":7,
            "tourGroupID":2,
            "tourGroupNameLocal":"ทัวร์จีน",
            "tourGroupRouteLocal":"เจิ้งโจว ซีอาน สั่วหยาง",
            "tourGroupNameGlobal":"ทัวร์จีน",
            "tourGroupRouteGlobal":"เจิ้งโจว ซีอาน สั่วหยาง",
            "tourID":2,
            "tourCode":"ZCGD01",
            "tourName":"เลสโก จิ๋นซี ยกทัพ",
            "tourDay":5,
            "tourNight":6,
            "projectCode":"CGO-191205A-WE0001",
            "periodID":110,
            "periodCode":"CGO-191205A-WE",
            "periodStartDate":addDate(60),
            "periodEndDate":addDate(64),
            "periodStatus":"I",
            "perioidCheckInDate":addDate(60),
            "periodPlaceID":1,
            "periodPlaceCode":"DMK",
            "periodPlaceNameLocal":"สนามบินดอนเมือง",     
            "periodPlaceNameGlobal":"DON MUEANG AIRPORT",
            "flightDetails":[
                                {
                                    "flightRouteType":1,
                                    "flightType":1,
                                    "flightDate":addDate(1),
                                    "flightNo":"XJ701",
                                    "routeFrom":"DMK",
                                    "routeTo":"CGD",
                                    "departureTime":addDate(1),
                                    "arrivalTime":addDate(1),
                                    "airlineCode":"XJ",
                                    "airlineID":2,
                                    "airlineNameLocal":"AIR ASIA X",
                                    "airlineNameGlobal":"AIR ASIA X"                                    
                                },
                                {
                                    "flightRouteType":1,
                                    "flightType":2,
                                    "flightDate":addDate(1),
                                    "flightNo":"XJ702",
                                    "routeFrom":"CGD",
                                    "routeTo":"DMK",
                                    "departureTime":addDate(1),
                                    "arrivalTime":addDate(1),
                                    "airlineCode":"XJ",
                                    "airlineID":2,
                                    "airlineNameLocal":"AIR ASIA X",
                                    "airlineNameGlobal":"AIR ASIA X"      
                                }
                            ],
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
            "bookingRevise":0,
            "bookingDownPaymentAmount":10000,
            "bookingDownPaymentDate":addDate(5),
            "bookingPaymentAmout":12500,
            "bookingPaymentDate":addDate(1),
            "bookingAmount":299988,
            "bookingDetails":[
                {   
                    "itemType":"G",
                    "itemTemplateCode":"BKG",
                    "itemSec":1,
                    "itemSecDetail":"ส่วนที่ 1 : None Vat",
                    "itemSecUseVat":"NO",
                    "itemSecUseVatPer":0,
                    "itemID":9,
                    "itemSeq":1,
                    "itemSubSeq":0,
                    "itemFreeSeq":0,
                    "itemCode":"ADL",
                    "itemDetail":"ค่าทัวร์ญี่ปุ่น ผู้ใหญ่",
                    "itemQty":12,
                    "itemUnit":"Pcs.",
                    "itemUnitPrice":26999,
                    "itemDisCal":"",
                    "itemDisAmount":0,
                    "itemAmount":323988                
                }
            ],
            "memberID":2,
            "memberNameLocal":"บริษัท เอ็กซ์แอล เวิลด์ ทัวร์ จำกัด",
            "memberNameGlobal":"บริษัท เอ็กซ์แอล เวิลด์ ทัวร์ จำกัด",
            "memberTel":"02-408-8001 (60 คู่สาย)",
            "memberFax":"02-070-6626-7",
            "memberEmail":"info@zegotravel.com",
            "memberAddressSec1Local":"22/7-9 ซ.นนทรี 10 ถ.นนทรี แขวงช่องนนทรี เขตยานนาวา กรุงเทพมหานคร 10120",
            "memberAddressSec1Global":"22/7-9 Nonsri 10, Nonsri Rd., Chongnonsri, Yannawa, Bangkok 10120",
            "memberTaxID":"0105552023586",
            "memberUserID":5,
            "memberUserNameLocal":"คุณจ๊ะโอ๋ บริษัท เอ็กซ์แอล เวิลด์ ทัวร์จำกัด",
            "memberUserNameGlobal":"คุณจ๊ะโอ๋ บริษัท เอ็กซ์แอล เวิลด์ ทัวร์จำกัด",
            "memberUserTel":"088-999-9988",
            "customerName":"คุณพัชรา",
            "customerTel":"086-3799553",
            "customerTel2":"",
            "customerEmail":"",
            "customerLineID":"",
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
                            ],
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
                                      ],
            "banks":[
                {
                    "bankID":2,
                    "bankName":"กสิกรไทย",
                    "bankIcon":"/var/images/banks/20190111.jpeg",
                    "bankAccountNumber":"860-1-01987-7",
                    "bankAccountName":"บจก. ซีโก้ ทราเวล จำกัด",
                    "bankBranchID":12,
                    "bankBranchName":"สาขา เทสโก้โลตัส พระราม 3"
                },
                {
                    "bankID":3,
                    "bankName":"ไทยพาณิชย์",
                    "bankIcon":"/var/images/banks/20190112.jpeg",
                    "bankAccountNumber":"212-2-59999-9",
                    "bankAccountName":"บจก. ซีโก้ ทราเวล จำกัด",
                    "bankBranchID":16,
                    "bankBranchName":"สาขา เทสโก้โลตัส พระราม 3"
                },
                {
                    "bankID":4,
                    "bankName":"กรุงเทพ",
                    "bankIcon":"/var/images/banks/201901125.jpeg",
                    "bankAccountNumber":"949-0-32393-9",
                    "bankAccountName":"บจก. ซีโก้ ทราเวล จำกัด",
                    "bankBranchID":19,
                    "bankBranchName":"สาขา เทสโก้โลตัส พระราม 3"
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


