var express = require('express');
var router = express.Router();
var ctrlPeople = require('../controllers/people.controllers.js');

router
  .route('/people')
  .get(ctrlPeople.peopleGetAll);

router
  .route('/person/new')
  .post(ctrlPeople.peopleAddOne);

router
  .route('/person/:personId')
  .get(ctrlPeople.peopleGetOne);


module.exports = router;
