const attend = require('../../controllers/attendence');
const httpMsgs = require('../httpMsgs');

exports.post = (req,res,myurl)=>{
    var reqBody = '';
    req.on("data",(data)=>{
        reqBody += data;
        if(reqBody.length>1e7){
            httpMsgs.send413(req,res);
        }
    });
    req.on("end", ()=>{
        attend.add(req,res,reqBody);
    });
};
