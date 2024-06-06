const { createMovie } = require("../services/movie");
const { asyncHandler } = require("../utility/utils");



const createController = {
    getCreateMovie: (req, res) => {
        res.render('create-movie');
    },
    postCreateMovie: async (req, res) => {
        const movieData = req.body;
        try {
            const creatorId = res.locals.user.id;
            await createMovie(movieData, creatorId);
            res.redirect('/');
        } catch (err) {

            console.log(err);
            res.render('create-movie');
        }


    }
}


module.exports = {
    createController: {
        getCreateMovie: asyncHandler(createController.getCreateMovie),
        postCreateMovie: createController.postCreateMovie

    }
}

