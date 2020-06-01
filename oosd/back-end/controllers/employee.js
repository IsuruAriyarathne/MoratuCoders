const db = require('../core/db');
const httpMsgs = require('../core/httpMsgs');
const util = require('util');

exports.getList = (req,res)=>{
    db.excutesql("SELECT * FROM employee_table", (data , err)=>{
        if(err){
            httpMsgs.send500(req,res,err);
        }
        else{
            httpMsgs.sendJson(req , res, data);
        }
    });
};

exports.get = (req,res,empno)=>{
    db.excutesql("SELECT * FROM employee_table WHERE employee_id="+ empno, (data , err)=>{
        if(err){
            httpMsgs.send500(req,res,err);
        }
        else{
            //console.log(data.id);//should add error to unvaild id
            httpMsgs.sendJson(req , res, data);
        }
    });
};

exports.getStatus = (req,res,empno)=>{
    db.excutesql("SELECT employee_id FROM employee_table WHERE employee_id="+ empno, (data , err)=>{
        if(err){
            httpMsgs.send500(req,res,err);
        }
        else{
            if(data[0]){
                httpMsgs.send200(req,res);
            }
            else{
                httpMsgs.send400(req,res);
            }
            
        }
    });
};

exports.add = (req,res,reqBody)=>{
    try{
        if(!reqBody) throw new Error("Input not valid");
        var data = JSON.parse(reqBody);
        if(!data) throw new Error("Input not valid");
        var sql = "INSERT INTO employee_table (employee_id, salary_id,name,dob,employee_type,gender) VALUES";
        sql += util.format("(%d,%d,'%s','%s',%d,'%s')",data.employee_id, data.salary_id, data.name, data.dob, data.employee_type, data.gender);
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

        if(!data.employee_id) throw new Error("id not provided");
        var sql = "UPDATE employee_table SET";
//validate each item and add to query
        if(data.salary_id){
            sql += " salary_id =" + util.format(" %d ", data.salary_id)+",";
        }
        if(data.name){
            sql += " name =" + util.format(" '%s' ", data.name)+",";
        }
        if(data.dob){
            sql += " dob =" + util.format(" '%s' ", data.dob)+",";
        }
        if(data.employee_type){
            sql += " employee_type =" + util.format(" %d ", data.employee_type)+",";
        }
        if(data.gender){
            sql += " gender =" + util.format(" '%s' ", data.gender)+",";
        }
        sql = sql.slice(0,-1); // to remove last ,
        sql += " WHERE employee_id= "+ data.employee_id;

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
        if(!data.employee_id) throw new Error("id not provided");

        var sql = "DELETE FROM employee_table ";
        sql += "WHERE employee_id= "+ data.employee_id;
        
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