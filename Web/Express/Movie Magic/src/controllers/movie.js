const { Movie } = require("../models/movie")
const { getAllMovies } = require("../services/movie")

module.exports = {
    homeController: {
        home: async (req, res) => {
            res.render('home', { movies: await getAllMovies() })

        },
        search: async (req, res) => {
            res.render('search', { movies: await getAllMovies() })
        }
    }
}