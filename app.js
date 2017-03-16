require('./api/data/connection.js');
var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');
var bodyParser = require('body-parser');

// Set Port
app.set('port', 3000);

// Middleware
app.use(function(req,res,next){ console.log(req.method, req.url); next(); });
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
//prefix for routes
app.use('/api', routes);

//server listening
var server = app.listen(app.get('port'), function(){
  var port = server.address().port;
  console.log("listening on " + port);
});
