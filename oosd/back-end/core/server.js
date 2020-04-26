var http = require('http');
var emp = require('../controllers/employee');
var settings = require('../settings');
var httpMsgs = require('./httpMsgs');


http.createServer((req,res)=>{
    switch (req.method){
        case "GET":
            if(req.url == "/oosd/back-end/"){ // base http request
                res.end();
            }
            else if(req.url == "/oosd/back-end/employees" ){
                emp.getList(req,res);
            }
            else{
                var empnoPatt = "[0-9]+";
                var pattern = new RegExp("/oosd/back-end/employees/"+empnoPatt);
                if(pattern.test(req.url)){
                    pattern = new RegExp(empnoPatt);
                    var empno = pattern.exec(req.url);
                    emp.get(req,res,empno);
                }
                else{
                    httpMsgs.send404(req,res);
                }
            }
            break;
            
        case "POST":
            if(req.url == "/oosd/back-end/employees"){
                var reqBody = '';
                req.on("data",(data)=>{
                    reqBody += data;
                    if(reqBody.length>1e7){
                        httpMsgs.send413(req,res);
                    }
                });
                req.on("end", ()=>{
                    emp.add(req,res,reqBody);
                })
            }
            else{
                httpMsgs.send404(req,res);
            }
            break;

        case "DELETE":
            if(req.url == "/oosd/back-end/employees"){
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
            }
            else{
                httpMsgs.send404(req,res)
            }
            break;

        case "PUT":
            if(req.url == "/oosd/back-end/employees"){
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
            }
            else{
                httpMsgs.send404(req,res)
            }
            break;

        default:
            httpMsgs.send405(req,res);
            break;
    }
}).listen(settings.webPort,()=>{
    console.log("Started listening at: "+ settings.webPort);
});