const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

const Card = mongoose.models.Card || mongoose.model('Card', cardSchema);
module.exports = Card;