const mysql = require('mysql');
const settings = require('../settings');

var pool = mysql.createPool(settings.dbConfig);

exports.excutesql = (sql, callback)=>{
    
    pool.getConnection((err,conn)=>{
        if(err){
            callback(null,err);
        }
        else{
            conn.query(sql,(err,results)=>{
                conn.destroy();
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