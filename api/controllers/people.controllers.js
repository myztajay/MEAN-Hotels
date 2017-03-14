var peopleData = require('../data/hotel-data.json');

module.exports.peopleGetAll = function(req, res) {

    var offset = 0;
    var count = 5;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
        console.log("true");
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }

    var returnData = peopleData.slice(offset, offset + count);

    res.json(returnData);
};

module.exports.peopleGetOne = function(req, res) {
    var personId = req.params.personId;
    var thisPerson = peopleData[personId];
    console.log("GET the Person, ID: " + personId);
    res.json(thisPerson);
};

module.exports.peopleAddOne = function(req, res) {
    console.log("ADD new Person hmm " + req[1]);
    res.json(req.body);
};
