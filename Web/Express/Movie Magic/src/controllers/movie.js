const { Movie } = require("../models/movie");
const { getAllMovies, getMovieById, getCastById, deleteMovie } = require("../services/movie");
const { asyncHandler } = require("../utility/utils");




const movieController = {
    home: async (req, res) => {

        const movies = await getAllMovies();
        res.render('home', { movies })

    },
    details: async (req, res) => {
        const id = req.params.id;
        const cast = [];
        const movie = await getMovieById(id);
        if (res.locals.user.id == movie.creatorId) {
            movie.isCreator = true;
        }
        for (const castId in movie.cast) {
            const actor = await getCastById(movie.cast[castId])
            cast.push(actor);
        }
        res.render('details', { movie, cast });
    },
    search: async (req, res) => {
        const queries = req.query;
        let [title, genre, year] = Object.values(queries);


        const movies = await getAllMovies();

        if (Object.keys(queries).length == 0 ||
            (!title && !genre && !year)) {
            res.render('search', { movies });

        } else {
            title = title.toLowerCase();
            genre = genre.toLowerCase();

            const filteredMovies = movies.filter((movie) => {

                if ((movie.title.toLowerCase().includes(title) && title !== '') ||
                    (movie.genre.toLowerCase().includes(genre) && genre !== '') ||
                    (movie.year.toString().includes(year) && year !== '')) {
                    return true;
                }
                return false;
            })
            res.render('search', { movies: filteredMovies });
        }

    },

    editGet: (req, res) => {
        res.render('edit');
    },
    delete: async (req, res) => {
        const id = req.params.id
        await deleteMovie(id);
        res.redirect('/');
    }


}
module.exports = {
    movieController: {
        home: asyncHandler(movieController.home),
        details: asyncHandler(movieController.details),
        search: asyncHandler(movieController.search),
        editGet: asyncHandler(movieController.editGet),
        delete: asyncHandler(movieController.delete)
    }
}