const { createCast, getMovieById, getCast, getCastByName, attachCast } = require("../services/movie");
const { asyncHandler } = require("../utility/utils");

const castController = {
    createCastGet: (req, res) => {
        res.render('create-cast');
    },
    createCastPost: async (req, res) => {
        const castData = req.body;
        await createCast(castData);
        res.redirect('/');
    },
    attachCastGet: async (req, res) => {
        const id = req.params.id
        const movie = await getMovieById(id);
        const cast = await getCast();
        const filteredCast = cast.filter(cast => cast.attached == false);
        res.render('attach-cast', {
            movie,
            filteredCast
        });
    },
    attachCastPost: async (req, res) => {
        const movieId = req.params.id
        const name = req.body.cast;

        const cast = await getCastByName(name);

        const castId = cast[0]._id


        await attachCast(movieId, castId)
        res.redirect(req.url)
    }
}



module.exports = {
    castController: {
        createCastGet: asyncHandler(castController.createCastGet),
        createCastPost: asyncHandler(castController.createCastPost),
        attachCastGet: asyncHandler(castController.attachCastGet),
        attachCastPost: asyncHandler(castController.attachCastPost)
    }
}