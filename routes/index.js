var express = require('express');
var router = express.Router();

router
  .route('/json')
  .get(function(req, res){
    console.log("GET the json");
    res.json({"key":true});
  })
  .post(function(req, res){
    console.log("POST the json");
    res.json({"key":"POST the json"});
  });
module.exports = router;
