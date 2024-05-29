const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    director: String,
    year: String,
    imageURL: String,
    rating: String,
    description: String
})

const Movie = mongoose.model('Movie', movieSchema);



module.exports = {
    Movie
}