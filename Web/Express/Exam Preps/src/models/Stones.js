const mongoose = require('mongoose');


const stonesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    formula: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likedList: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default: []
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

})

const Stone = mongoose.model('Stone', stonesSchema);

module.exports = {
    Stone
}