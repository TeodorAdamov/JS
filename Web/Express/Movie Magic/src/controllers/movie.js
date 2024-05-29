const { Movie } = require("../models/movie")
const { getAllMovies } = require("../services/movie")

module.exports = {
    movieController: {
        home: async (req, res) => {
            res.render('home', { movies: await getAllMovies() })

        },
        search: async (req, res) => {
            console.log(req.query);
            res.render('search');
        },


    }
}