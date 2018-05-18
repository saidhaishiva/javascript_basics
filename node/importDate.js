var http = require("http")
var current = require('./dateLibrary')

var myServer = http.createServer(serverFunction).listen(8585)

 function serverFunction(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write("Hello from Date PARAMATERS")
    res.write("<br>")
    var cd = current.myDate()
    res.write(cd)
    res.end()
    
}

//myServer.listen(8585);