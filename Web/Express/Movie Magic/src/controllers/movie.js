const { Movie } = require("../models/movie");
const { getAllMovies, getMovieById } = require("../services/movie");
const { asyncHandler } = require("../utility/utils");




const movieController = {
    home: async (req, res) => {

        const movies = await getAllMovies();
        res.render('home', { movies })

    },
    details: async (req, res) => {
        const id = req.params.id
        res.render('details', await getMovieById(id));
    },
    search: async (req, res) => {
        console.log(req.query);
        res.render('search');
    },


}
module.exports = {
    movieController: {
        home: asyncHandler(movieController.home),
        details: asyncHandler(movieController.details),
        search: asyncHandler(movieController.search),

    }
}