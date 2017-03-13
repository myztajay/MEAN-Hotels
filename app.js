var express = require('express');
var app = express();
var path = require('path');
var routes = require('./routes');

app.set('port', 3000);

// Middleware
app.use('/api', routes);
app.use(function(req,res,next){
  console.log(req.method, req.url);
  next();
});
app.use(express.static(path.join(__dirname, 'public')));





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
