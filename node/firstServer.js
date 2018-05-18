var http = require("http");
var myServer = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'})
    response.write("Hello From Node Server Shiva");
    response.end();
})

myServer.listen(8585);