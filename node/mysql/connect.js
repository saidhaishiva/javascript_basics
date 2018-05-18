var mysql = require('mysql');

var connection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:"fromnode"
})

connection.connect(function(err){
    if(err){
        throw err
    }
    else{
        console.log("Connected to the MYSQL Server")
        /*connection.query("create database fromnode",function(err,data){
            if(err){
                throw err;
            }
            else{
                console.log("Database Created!!!!");
            }
        })*/
        //var sql = "create table friends (name varchar(32),id int(8),location varchar(32))"
        var sql = "insert into friends (name,id,location) values ('Shiva',1,'Saidapet')"
        connection.query(sql, function(err, suc){
            if(err){
                throw err
            }
            else{
                console.log("Table Created!!!")
            }
        })
    }
})