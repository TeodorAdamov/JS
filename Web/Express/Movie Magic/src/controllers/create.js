const { createMovie } = require("../services/movie");
const { asyncHandler } = require("../utility/utils");


const createController = {
    getCreateMovie: (req, res) => {
        res.render('create-movie');
    },
    postCreateMovie: async (req, res) => {
        const movieData = req.body;
        await createMovie(movieData);
        res.redirect('/');
    }
}


module.exports = {
    createController: {
        getCreateMovie: asyncHandler(createController.getCreateMovie),
        postCreateMovie: asyncHandler(createController.postCreateMovie)
        
    }
}

