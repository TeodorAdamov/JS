const { createMovie } = require("../services/movie");

module.exports = {
    createController: {
        getCreate: (req, res) => {
            res.render('create');
        },
        postCreate: async (req, res) => {
            const movieData = req.body;
            await createMovie(movieData);
            res.redirect('/');
        }
    }
}

