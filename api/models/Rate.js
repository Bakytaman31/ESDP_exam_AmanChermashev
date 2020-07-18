const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RateSchema = new Schema({
    food: Number,
    service: Number,
    interior: Number,
    text: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cafe: {
        type: Schema.Types.ObjectId,
        ref: 'Cafe',
        required: true
    }
});

const Rate = mongoose.model('Rate', RateSchema);

module.exports = Rate;