var peopleData = require('../data/hotel-data.json');

module.exports.peopleGetAll = function (req, res) {
  console.log("GET the People");
  res.json( peopleData );
};

module.exports.peopleGetOne = function (req, res) {
  var personId = req.params.personId;
  var thisPerson = peopleData[personId];
  console.log("GET the Person, ID: " + personId);
  res.json( thisPerson );
};
