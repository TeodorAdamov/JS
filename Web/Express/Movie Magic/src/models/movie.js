const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        max: 2024,
        min: 1900
    },
    imageURL: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        max: 10,
        min: 1
    },
    description: {
        type: String,
        required: true
    },
    cast: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cast',
        default: []
    }],
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

})

const Movie = mongoose.model('Movie', movieSchema);



module.exports = {
    Movie
}