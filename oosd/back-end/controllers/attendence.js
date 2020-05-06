const db = require('../core/db');
const httpMsgs = require('../core/httpMsgs');
const util = require('util');

exports.add = (req,res,reqBody)=>{
    try{
        if(!reqBody) throw new Error("Input not valid");
        var data = JSON.parse(reqBody);
        if(!data) throw new Error("Input not valid");
        var sql = "INSERT INTO daily_attendance (tdate, division,employee_id,vehiclewalk) VALUES";
        sql += util.format("('%s',%d,%d,%d)",data.date, data.division, data.employee_id, data.method);
        db.excutesql(sql, (data , err)=>{
            if(err){
                httpMsgs.send500(req,res,err);
            }
            else{
                httpMsgs.send200(req,res);
            }
        });
    }
    catch(ex){
        httpMsgs.send500(req, res, ex);
    }
};

