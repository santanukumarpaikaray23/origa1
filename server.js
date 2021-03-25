var http = require("http")
 
var server = http.createServer(function(request,response){
response.end("will it work or not? ")

})
var PORT =3000;
server.listen(PORT,function(){
    console.log('Server listening at port ${PORT}')
})


