const express = require('express');
const app = express();
const cors = require('cors');
const toursRouter = require('./routes/v1/tours.route');


// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to our Tour management tools');
})

app.use('/tours', toursRouter)






module.exports = app;