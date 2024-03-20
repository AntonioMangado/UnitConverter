require("dotenv").config()
const mongoose = require('mongoose')

const url = `mongodb+srv://antoniomangado:VrNIfR3pHkYS5rj4@cluster0.lmzuncl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url)
    .then( () => {
        console.log('Connection to database successful :D')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })


module.exports = mongoose;