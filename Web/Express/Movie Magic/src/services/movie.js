const mongoose = require('mongoose');
const { Movie } = require('../models/movie');



async function getAllMovies() {
    return await Movie.find({}).lean();

}

async function getMovieById(id) {
    return await Movie.findById(id).lean();
}


async function createMovie(movieData) {

}



module.exports = {
    getAllMovies,
    getMovieById
}
