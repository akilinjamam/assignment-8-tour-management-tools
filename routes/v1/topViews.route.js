const express = require('express');
const router = express.Router();

const topViewsController = require('../../controllers/tours.controller');


router.route('/').get(topViewsController.getTopViewedId);


module.exports = router;