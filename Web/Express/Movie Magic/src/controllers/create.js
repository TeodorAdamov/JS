module.exports = {
    createController: {
        getCreate: (req, res) => {
            res.render('create');
        },
        postCreate: (req, res) => {
            const body = req.body;
            console.log(body);
        }
    }
}

