const castController = {
    createCast: (req, res) => {
        res.render('cast-create');
    },
    attachCast: (req, res) => {
        res.render('cast-attach');
    }
}



module.exports = {
    createCast: castController.createCast,
    attachCast: castController.attachCast
}