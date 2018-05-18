var http = require("http");
var url = require("url");
var host = require("os");

var myServer = http.createServer(serverFunction).listen(8585)

 function serverFunction(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write("Iam Working with QUERY PARAMATERS")

    var myQuery = url.parse(req.url,true).query

    var qt1 =myQuery.name
    var qt2 =myQuery.loc

    console.log(host.hostName())

    res.write("<br>")
    res.write(qt1 +" "+qt2)
    res.end()
}

//myServer.listen(8585);