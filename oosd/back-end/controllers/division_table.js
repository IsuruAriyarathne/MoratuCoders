const db = require('../core/db');
const httpMsgs = require('../core/httpMsgs');
const util = require('util');

exports.getList = (req,res)=>{
    db.excutesql("SELECT * FROM division_table", (data , err)=>{
        if(err){
            httpMsgs.send500(req,res,err);
        }
        else{
            httpMsgs.sendJson(req , res, data);
        }
    });
};

exports.get = (req,res,divno)=>{
    db.excutesql("SELECT * FROM division_table WHERE division_no="+ divno, (data , err)=>{
        if(err){
            httpMsgs.send500(req,res,err);
        }
        else{
            //console.log(data.id);//should add error to unvaild id
            httpMsgs.sendJson(req , res, data);
        }
    });
};