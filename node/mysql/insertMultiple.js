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
        var sql = "insert into friends (name,id,location) values ?"
        var record = [
            ['Shiva',2,'Saidapet'],
            ['ShivaRaman',3,'Chennai'],
            ['Koushik',4,'Kumbakonam'],
            ['Kanji',5,'saisjsj'],
            ['Gundu',6,'Gundu'],
            ['Vaibhavan',7,'sssaidapet'],
            ['Sara',8,'shshj'],
            ['Ruddy',9,'sssssss']
        ]
        connection.query(sql, [record],function(err, suc){
            if(err){
                throw err
            }
            else{
                console.log("Multiple Rows Created!!!")
            }
        })
    }
})