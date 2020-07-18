const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CafeSchema = new Schema({
    title: String,
    description: String,
    mainPhoto: String,
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