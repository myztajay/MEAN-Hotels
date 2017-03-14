var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/persona';

var connnection = null;

var open = function(){
  MongoClient.connect(dburl, function(err, db){
    if (err) {
      console.log("Db connection failed");
      return;
    }
    _connection = db;
    console.log("DB Connected");
  });
  //set connection
};

var get = function(){
  return _connection;
};

module.exports = {
  open: open,
  get: get
};
