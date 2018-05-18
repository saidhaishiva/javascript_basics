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
       var sql = "select * from friends"
        
        connection.query(sql ,function(err, result,success){
            if(err){
                throw err
            }
            else{
                //console.log("result"+JSON.stringify(result))
                console.log(result)
                console.log("result"+JSON.stringify(result))
            }
        })
    }
})