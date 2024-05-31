const { createMovie } = require("../services/movie");
const { asyncHandler } = require("../utility/utils");



const createController = {
    getCreateMovie: (req, res) => {
        res.render('create-movie');
    },
    postCreateMovie: async (req, res) => {
        const movieData = req.body;
        console.log(movieData);
        try {
            await createMovie(movieData);
            res.redirect('/');
        } catch (err) {
            const errors = [];

            for (const error in err.errors) {
                errors.push(err.errors[error]);
            }
            console.log(err);
            res.render('create-movie', err);
        }


    }
}


module.exports = {
    createController: {
        getCreateMovie: asyncHandler(createController.getCreateMovie),
        postCreateMovie: createController.postCreateMovie

    }
}

