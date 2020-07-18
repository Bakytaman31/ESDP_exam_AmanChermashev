const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CafeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    overall: Number,
    food: Number,
    service: Number,
    interior: Number
});

const Cafe = mongoose.model('Cafe', CafeSchema);

module.exports = Cafe;