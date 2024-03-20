const mongoose = require('mongoose');
require('../config/db_mongo');

const objectSchema = new mongoose.Schema({
    id: { 
        type: Number, 
        required: true,
        unique: true
    },
    inputValue: {
        type: Number,
        required: true
    },
    inputUnit: {
        type: String,
        required: true
    },
    outputValue: {
        type: Number,
        required: true
    },
    outputUnit: {
        type: String,
        required: true
    }
});

const convertionSchema = mongoose.Schema(objectSchema)
const Convertion = mongoose.model('Convertion', convertionSchema);

module.exports = Convertion;