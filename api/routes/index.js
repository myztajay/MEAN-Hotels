var express = require('express');
var router = express.Router();
var ctrlPeople = require('../controllers/people.controllers.js');
var ctrlReviews = require('../controllers/reviews.controllers.js');
router
  .route('/people')
  .get(ctrlPeople.peopleGetAll);

router
  .route('/people/:personId')
  .get(ctrlPeople.peopleGetOne);

  router
  .route('/people/new')
  .post(ctrlPeople.peopleAddOne);

//reviews routes
router
  .route('/people/:personId/reviews')
  .get(ctrlReviews.reviewsGetAll);

router
  .route('/people/:personId/reviews/:reviewId')
  .get(ctrlReviews.reviewsGetOne);

module.exports = router;
