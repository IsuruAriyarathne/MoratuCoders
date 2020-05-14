const db = require('../core/db');
const httpMsgs = require('../core/httpMsgs');
const util = require('util');

exports.getList = (req,res)=>{
    db.excutesql("SELECT * FROM vehicle_detail", (data , err)=>{
        if(err){
            httpMsgs.send500(req,res,err);
        }
        else{
            httpMsgs.sendJson(req , res, data);
        }
    });
};