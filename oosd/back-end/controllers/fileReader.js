const fs = require('fs');
const httpMsgs = require('../core/httpMsgs');

exports.sendHomePage = (req,res)=>{
    fs.readFile('./home.html',(err,data)=>{
        if(err){
            httpMsgs.send404(req,res);
        }
        else{
            httpMsgs.sendHtml(req,res,data);
        }
        return res.end();
    });
};