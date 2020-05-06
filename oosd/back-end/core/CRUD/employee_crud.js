const emp = require('../../controllers/employee');
const httpMsgs = require('../httpMsgs');

exports.get = (req,res,myurl)=>{
    if(myurl.searchParams.get('id')){
        emp.get(req,res,myurl.searchParams.get('id'));
    }
    else{
        emp.getList(req,res);
    }            
};

exports.post = (req,res,myurl)=>{
    var reqBody = '';
    req.on("data",(data)=>{
        reqBody += data;
        if(reqBody.length>1e7){
            httpMsgs.send413(req,res);
        }
    });
    req.on("end", ()=>{
        emp.add(req,res,reqBody);
    });
};

exports.delete = (req,res,myurl)=>{
    var reqBody = '';
    req.on("data",(data)=>{
        reqBody += data;
        if(reqBody.length>1e7){
            httpMsgs.send413(req,res);
        }
    });
    req.on("end", ()=>{
        emp.delete(req,res,reqBody);
    });
};

exports.put = (req,res,myurl)=>{
    var reqBody = '';
    req.on("data",(data)=>{
        reqBody += data;
        if(reqBody.length>1e7){
            httpMsgs.send413(req,res);
        }
    });
    req.on("end", ()=>{
        emp.update(req,res,reqBody);
    });
};