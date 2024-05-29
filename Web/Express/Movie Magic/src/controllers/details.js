const { getMovieById } = require("../services/movie");


module.exports = {
    detailsController: async (req, res) => {
        const id = req.params.id
        console.log(id);
        res.render('details', await getMovieById(id));
    }
}