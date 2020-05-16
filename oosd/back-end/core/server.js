const http = require('http');
const settings = require('../settings');
const fileReader = require('../controllers/fileReader');
const crud = require('./CRUD/crud');

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
   // console.log(myurl.searchParams.get('id'));
    switch (req.method){
        case "GET":
            crud.get(req,res);
            break;
     
        case "POST":
            crud.post(req,res);
            break;

        case "DELETE":
            crud.delete(req,res);
            break;

        case "PUT":
            crud.put(req,res);
            break;

        default:
            httpMsgs.send405(req,res);
            break;
    }
}).listen(settings.webPort,()=>{
    console.log("Started listening at: "+ settings.webPort);
});