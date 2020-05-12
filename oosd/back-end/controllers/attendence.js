const db = require('../core/db');
const httpMsgs = require('../core/httpMsgs');
const util = require('util');

exports.getList = (req,res)=>{
    db.excutesql("SELECT * FROM daily_attendance", (data , err)=>{
        if(err){
            httpMsgs.send500(req,res,err);
        }
        else{
            httpMsgs.sendJson(req , res, data);
        }
    });
};

exports.get = (req,res,tdate)=>{
    db.excutesql("SELECT * FROM daily_attendance WHERE tdate='"+tdate+"'", (data , err)=>{
        if(err){
            httpMsgs.send500(req,res,err);
        }
        else{
            //console.log(data.id);//should add error to unvaild id
            httpMsgs.sendJson(req , res, data);
        }
    });
};

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

exports.update = (req,res,reqBody)=>{
    try{
        if(!reqBody) throw new Error("Input not valid");
        var data = JSON.parse(reqBody);

        if(!data.employee_id && !data.date) throw new Error("data not provided");
        var sql = "UPDATE daily_attendance SET";
//validate each item and add to query
        if(data.date){
            sql += " tdate =" + util.format(" '%s' ", data.date)+",";
        }
        if(data.division){
            sql += " division =" + util.format(" %d ", data.division)+",";
        }
        if(data.employee_id){
            sql += " employee_id =" + util.format(" %d ", data.employee_id)+",";
        }
        if(data.method==0 || data.method==1){
            sql += " vehiclewalk =" + util.format(" %d ", data.method)+",";
        }
        console.log(sql);
        sql = sql.slice(0,-1); // to remove last ,
        sql += " WHERE tdate='"+data.date+"' AND employee_id= "+ data.employee_id;
        console.log(sql);
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

exports.delete = (req,res,reqBody)=>{
    try{
        if(!reqBody) throw new Error("Input not valid");
        var data = JSON.parse(reqBody);
        if(!data.employee_id) throw new Error("data not provided");

        var sql = "DELETE FROM daily_attendance ";
        sql += " WHERE tdate='"+data.date+"' AND employee_id= "+ data.employee_id;
        
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
