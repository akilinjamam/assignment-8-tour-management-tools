const express = require('express');
const router = express.Router();
const cheapestToursController = require('../../controllers/tours.controller');

router.route('/').get(cheapestToursController.getCheapestTours);
module.exports = router;