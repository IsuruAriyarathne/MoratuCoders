exports.send500 = (req , res , err ) =>{
    res.writeHead(500,"Internal error occuered",{"Content-Type":"application/json"});
    console.log(err);
    res.write(JSON.stringify({data: "Error occured"}));   
    res.end();
};

exports.send405 = (req , res) =>{ 
    res.writeHead(405,"Method not allowed",{"Content-Type":"application/json"});
    res.write(JSON.stringify({data: "Error occured "}));   
    res.end();
};

exports.send404 = (req , res) =>{
    res.writeHead(404,"Not found",{"Content-Type":"application/json"});
    res.write(JSON.stringify({data: "Page not found "}));   
    res.end();
};

exports.send413 = (req , res ) =>{
    res.writeHead(413,"Large request",{"Content-Type":"application/json"});
    res.write(JSON.stringify({data: "Large connetent "}));   
    res.end();
};

exports.send200 = (req , res) =>{
    res.writeHead(200,"Success",{"Content-Type":"application/json"});
    res.end();
};

exports.sendJson = (req , res , data)=>{
    res.writeHead(200,{"Content-Type": "application/json"});
    res.write(JSON.stringify(data));
    res.end();
};
