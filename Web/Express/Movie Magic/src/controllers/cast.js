const { asyncHandler } = require("../utility/utils");

const castController = {
    createCastGet: (req, res) => {
        res.render('create-cast');
    },
    createCastPost: (req, res) => {
        const castData = req.body;
        console.log(castData);
    },
    attachCastGet: (req, res) => {
        res.render('attach-cast');
    },
    attachCastPost: (req, res) => {

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