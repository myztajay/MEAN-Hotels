var dbconn = require('../data/dbconnection.js');
var ObjectId = require('mongodb').ObjectId;
var peopleData = require('../data/hotel-data.json');

module.exports.peopleGetAll = function(req, res) {
    var db = dbconn.get();
    var collection = db.collection('people');

    var offset = 0;
    var count = 5;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
        console.log("true");
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }

    collection
      .find()
      .skip(offset)
      .limit(count)
      .toArray(function(err, people){
      console.log("hotels found", collection);
    res
      .json(people);
      });

};

module.exports.peopleGetOne = function(req, res) {
    var db = dbconn.get();
    var collection = db.collection('people');

    var personId = req.params.personId;
    console.log("GET the Person, ID: " + personId);
    collection
      .findOne({
        _id: ObjectId(personId)
      }, function(err, person){
        res
        .json(person);
      });
};

module.exports.peopleAddOne = function(req, res) {
    var db = dbconn.get();
    var collection = db.collection('people');
    var newHotel;
    if(req.body && req.body.name && req.body.stars){
      newPerson = req.body;
      newPerson.stars = parseInt(req.body.stars, 10);
      console.log("added");
      collection.insertOne(newPerson, function(err, response){
        console.log(response.ops);
        res
        .status(201)
        .json(response.ops);
      });

    } else {
      console.log("Data is missing from the body");
      res
      .status(400)
      .json({message : "Require data missing"});
    }

};
