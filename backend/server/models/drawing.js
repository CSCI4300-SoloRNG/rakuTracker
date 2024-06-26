const mongoose = require('mongoose');

const drawingSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        required: true
    }]
});

const Drawing = mongoose.models.Drawing || mongoose.model('Drawing', drawingSchema);
module.exports = Drawing;