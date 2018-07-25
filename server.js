const server = require('express')
const app = server();
//var request= require('request')
app.use('/',server.static('./public'))




app.listen(5000,function(){
    console.log("server is running at port no. 5000");
});