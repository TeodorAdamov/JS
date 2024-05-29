const { createMovie } = require("../services/movie");

module.exports = {
    createController: {
        getCreate: (req, res) => {
            res.render('create');
        },
        postCreate: async (req, res) => {
            const body = req.body;
            await createMovie(body)
        }
    }
}

