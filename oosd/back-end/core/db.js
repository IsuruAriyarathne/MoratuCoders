const mysql = require('mysql');
const settings = require('../settings');

exports.excutesql = (sql, callback)=>{
    var sqlConnection = mysql.createConnection(settings.dbConfig);
    sqlConnection.connect((err)=>{
        if(err){
            console.log(err);
            callback(null,err);
        }
        else{
            sqlConnection.query(sql,(err,results)=>{
                if(err){
                    console.log(err);
                    callback(null,err);
                }
                else{
                    console.log(results);
                    callback(results);
                }
            });
        }
   });
};