const url = require('url');
const settings = require('../../settings');
const emp_crud = require('./employee_crud');
const attend_crud = require('./attendence_crud');
const httpMsgs = require('../httpMsgs');

exports.get = (req,res)=>{
    const myurl = new URL('http://localhost:'+settings.webPort+ req.url);
    if(myurl.pathname == '/employees'){
        emp_crud.get(req,res,myurl);
    }else if(myurl.pathname == "/attendence"){

    }
    else{
        httpMsgs.send404(req,res);
    }
};

exports.post = (req,res)=>{
    const myurl = new URL('http://localhost:'+settings.webPort+ req.url);
    if(myurl.pathname == '/employees'){
        emp_crud.post(req,res,myurl);
    }
    else if(myurl.pathname == "/attendance"){
        attend_crud.post(req,res,myurl);     
    }
    else{
        httpMsgs.send404(req,res);
    }
};

exports.delete = (req,res)=>{
    const myurl = new URL('http://localhost:'+settings.webPort+ req.url);
    if(myurl.pathname == '/employees'){
        emp_crud.delete(req,res,myurl);
    }
    else if(myurl.pathname == "/attendance"){
        attend_crud.post(req,res,myurl);     
    }
    else{
        httpMsgs.send404(req,res);
    }
};

exports.put = (req,res)=>{
    const myurl = new URL('http://localhost:'+settings.webPort+ req.url);
    if(myurl.pathname == '/employees'){
        emp_crud.put(req,res,myurl);
    }
    else if(myurl.pathname == "/attendance"){
        attend_crud.post(req,res,myurl);     
    }
    else{
        httpMsgs.send404(req,res);
    }
};

