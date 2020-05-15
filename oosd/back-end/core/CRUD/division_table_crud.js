const divT = require('../../controllers/division_table');
const httpMsgs = require('../httpMsgs');

exports.get = (req,res,myurl)=>{
    divT.getList(req,res);              
};
