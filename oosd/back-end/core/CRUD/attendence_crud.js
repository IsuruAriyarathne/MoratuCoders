const attend = require('../../controllers/attendence');
const httpMsgs = require('../httpMsgs');

exports.get = (req,res,myurl)=>{
    if(myurl.searchParams.get('date')){
        if(myurl.searchParams.get('div')){
            attend.getByDiv(req,res,myurl.searchParams.get('date'));
        }
        else{
            attend.get(req,res,myurl.searchParams.get('date'),myurl.searchParams.get('div'));
        }   
    }
    else{
        attend.getList(req,res);
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
        attend.add(req,res,reqBody);
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
        attend.update(req,res,reqBody);
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
        attend.delete(req,res,reqBody);
    });
};