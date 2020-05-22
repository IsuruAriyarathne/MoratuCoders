const divT = require('../../controllers/division_table');
const httpMsgs = require('../httpMsgs');

exports.get = (req,res,myurl)=>{
    if(myurl.searchParams.get('id')){
        divT.get(req,res,myurl.searchParams.get('id'));
    }
    else{
        divT.getList(req,res);
    }            
};
