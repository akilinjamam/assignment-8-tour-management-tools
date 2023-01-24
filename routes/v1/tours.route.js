const express = require('express');
const routers = express.Router();

const toursController = require('../../controllers/tours.controller');


routers.route('/')
    .post(toursController.saveTours)
    .get(toursController.getTours)


module.exports = routers;

