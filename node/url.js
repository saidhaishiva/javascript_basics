var http = require("http");

var myServer = http.createServer(serverFunction)

 function serverFunction(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write("Iam Working with URL")
    res.write("<br>")
    res.write(req.url)
    res.end()
}

myServer.listen(8585);