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
    const movie = new Movie({
        title: movieData.title,
        genre: movieData.genre,
        director: movieData.director,
        year: movieData.year,
        imageURL: movieData.imageURL,
        rating: movieData.rating,
        description: movieData.description,
    })

    try {
        await movie.save();
    } catch (error) {
        for (const path in error.errors) {
            console.log(error.errors[path].properties);
        }
    }
}



module.exports = {
    getAllMovies,
    getMovieById,
    createMovie
}
