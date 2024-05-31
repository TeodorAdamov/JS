const mongoose = require('mongoose');
const { Movie } = require('../models/movie');
const { Cast } = require('../models/cast');



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
        throw new Error(error.errors)
    }
}

async function createCast(castData) {

    const cast = new Cast({
        name: castData.name,
        age: castData.age,
        born: castData.born,
        nameInMovie: castData.nameInMovie,
        imageURL: castData.imageURL,
    })

    try {
        await cast.save()
    } catch (error) {
        throw new Error(error.errors)
    }
}



module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    createCast
}
