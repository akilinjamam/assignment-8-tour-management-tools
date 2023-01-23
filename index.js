const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = require('./app');
const colors = require('colors');


// connect to database

mongoose.connect(process.env.LOCAL_SERVER).then(() => {
    console.log('successfully connected to database.');
})



// server 



const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`app is running on port : ${port}`.yellow.bold);
})



