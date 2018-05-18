var http = require("http");
var fs = require("fs");

var myServer = http.createServer(fileServer).listen(8585)

 function fileServer(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write("Iam Working with FS Module")

    fs.readFile("india.html",function(err,data){
        res.write("<br>")
        res.write(data)
        
    
    //res.write(qt1 +" "+qt2)
    
        fs.writeFile("shiva.html",data,function(err){
            console.log(data);
        })

        res.end()    

    })
}

//myServer.listen(8585);