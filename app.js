const express = require('express');
const app = express();
const cors = require('cors');


// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to our Tour management tools');
})






module.exports = app;