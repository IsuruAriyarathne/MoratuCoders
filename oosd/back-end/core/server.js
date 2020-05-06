var http = require('http');
var url = require('url');
var emp = require('../controllers/employee');
var settings = require('../settings');
var httpMsgs = require('./httpMsgs');


http.createServer((req,res)=>{
    var myurl = new URL('http://localhost:'+settings.webPort+ req.url);
   // console.log(myurl.searchParams.get('id'));
    switch (req.method){
        case "GET":
            if(myurl.pathname == "/"){ // base http request
                res.end();
            }
            else if(myurl.pathname == "/employees" ){
                if(myurl.searchParams.get('id')){
                    emp.get(req,res,myurl.searchParams.get('id'));
                }
                else{
                    emp.getList(req,res);
                }            
            }
            else{
                httpMsgs.send404(req,res);
            }
            break;
            
        case "POST":
            if(req.url == "/employees"){
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
            if(req.url == "/employees"){
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
            if(req.url == "/employees"){
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