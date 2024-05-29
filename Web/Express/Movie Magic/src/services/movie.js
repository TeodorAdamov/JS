const mongoose = require('mongoose');
const { Movie } = require('../models/movie');



async function getAllMovies() {
    try {
        const movies = await Movie.find({}).lean();
        return movies;
    } catch (error) {
        throw new Error('Internal server error');
    }
}

async function getMovieById(id) {
    return await Movie.findById(id).lean();
}


async function createMovie(movieData) {

}



module.exports = {
    getAllMovies,
    getMovieById,
    createMovie
}
