var express = require('express');
var app = express();
var path = require('path');

app.set('port', 3000);

app.get('/', function(req, res){
  console.log("GET the homepage");
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/json', function(req, res){
  console.log("GET the json");
  res.json({"key":true});
});

app.get('/file', function(req, res){
  console.log("GET the file");
  res.sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), function(){
  var port = server.address().port;
  console.log("listening on " + port);
});
