const mysql = require('mysql');
const settings = require('../settings');

exports.excutesql = (sql, callback)=>{
    var pool = mysql.createPool(settings.dbConfig);
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