
let token_secret =encodeURIComponent('letsgo5fdc3505102e701b909836bf') 
module.exports = async (req,res,next) => {

   let req_secret = req.headers['token_secret']
   // 1 Empty
   if(!req_secret){
      res.status(401).json({"err":"[401] token secret is empty"})   
      return
   }
   // 1 Mismatch   
   if(req_secret!==token_secret){
      res.status(401).json({"err":"[401] token secret mismatch"})   
      return
   }   
   next();
}

