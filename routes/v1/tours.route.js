const express = require('express');
const routers = express.Router();

const toursController = require('../../controllers/tours.controller');


routers.route('/')
    .post(toursController.saveTours)
    .get(toursController.getTours)

routers.route('/trending')
    .get(toursController.getTopViewedId)
routers.route('/cheapest')
    .get(toursController.getCheapestTours)

routers.route('/:id')
    .get(toursController.getToursById)
    .patch(toursController.updateToursById)

module.exports = routers;

