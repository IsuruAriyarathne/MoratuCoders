const db = require('../core/db');
const httpMsgs = require('../core/httpMsgs');

class Method{
    getList(req,res,sql){
        db.excutesql(sql, (data , err)=>{
            if(err){
                httpMsgs.send500(req,res,err);
            }
            else{
                httpMsgs.sendJson(req , res, data);
            }
        });
    }

    get(req,res,sql){
        
    }

}