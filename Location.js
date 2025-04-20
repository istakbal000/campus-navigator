
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    coordinates: {
        lat: Number,
        lng: Number
    }
});

module.exports = mongoose.model('Location', locationSchema);
