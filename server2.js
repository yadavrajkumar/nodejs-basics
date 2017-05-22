var http = require("http");
var server = http.createServer(function(request,response){

response.writeHead(200,{'content-type' : 'text'})
response.end("Hello NodeJs World")


})
server.listen(2017,function(){

	console.log("server is listening at port 2017");
})
