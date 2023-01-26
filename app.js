const express = require('express');
const app = express();
const cors = require('cors');
const toursRouter = require('./routes/v1/tours.route');
const topViewsRouter = require('./routes/v1/topViews.route');
const cheapestToursRouter = require('./routes/v1/cheapestTours.route')

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to our Tour management tools');
})

app.use('/tours', toursRouter)
app.use('/tour/trending', topViewsRouter)
app.use('/tour/cheapest', cheapestToursRouter)

module.exports = app;