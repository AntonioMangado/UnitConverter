require("dotenv").config()
const mongoose = require('mongoose')

const url = process.env.MONGO_URI;

mongoose.connect(url)
    .then( () => {
        console.log('Connection to database successful :D')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })


module.exports = mongoose;