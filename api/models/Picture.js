const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PictureSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    cafe: {
        type: Schema.Types.ObjectId,
        ref: 'Cafe',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const Picture = mongoose.model('Picture', PictureSchema);

module.exports = Picture;