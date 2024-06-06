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
    try {
        return await Movie.findById(id).lean();

    } catch (error) {
        throw new Error('Internal server error');
    }
}

async function getCast() {
    try {
        const cast = await Cast.find({}).lean();
        return cast;
    } catch (error) {
        throw new Error('Internal server error');
    }
}

async function getCastById(id) {
    try {
        return await Cast.findById(id).lean();
    } catch (error) {
        throw new Error('Internal server error');
    }
}

async function getCastByName(name) {
    try {
        const cast = await Cast.find({ name: name }).lean();
        await Cast.findOneAndUpdate({ name: name }, { attached: true });
        return cast;
    } catch (error) {
        throw new Error('Internal server error');
    }
}

async function attachCast(movieId, castId) {
    try {
        const movie = await Movie.findById(movieId);
        movie.cast.push(castId);
        await movie.save();
    } catch (error) {
        throw new Error('Internal server error');
    }
}


async function createMovie(movieData, creatorId) {
    const movie = new Movie({
        title: movieData.title,
        genre: movieData.genre,
        director: movieData.director,
        year: Number(movieData.year),
        imageURL: movieData.imageURL,
        rating: Number(movieData.rating),
        description: movieData.description,
        creatorId: creatorId
    })

    try {
        await movie.save();
    } catch (error) {
        throw error
    }
}

async function createCast(castData) {

    const cast = new Cast({
        name: castData.name,
        age: Number(castData.age),
        born: castData.born,
        nameInMovie: castData.nameInMovie,
        castImage: castData.imageURL,
    })

    try {
        await cast.save()
    } catch (error) {
        console.log(error);
        throw error
    }
}



module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    createCast,
    getCast,
    getCastByName,
    attachCast,
    getCastById
}
