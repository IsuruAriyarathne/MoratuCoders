const vehiD = require('../../controllers/vehicle_detail');
const httpMsgs = require('../httpMsgs');

exports.get = (req,res,myurl)=>{
    vehiD.getList(req,res);              
};
