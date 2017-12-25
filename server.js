//freecodecamp practice
var express = require("express");
var app = express();


var port = process.env.port || 8080;
app.get("/",function(req,res){
  if (req.url === '/favicon.ico') return;
  res.json({
    ipaddress: req.connection.remoteAddress,
    language: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent'].match(/\((.*?)\)/)[1]
  });
});

app.listen(port);