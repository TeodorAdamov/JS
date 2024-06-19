const { catalogRouter } = require("../controllers/catalog");
const { stonesRouter } = require("../controllers/stones");
const { userRouter } = require("../controllers/user");

function configRoutes(app) {
    app.use(catalogRouter);
    app.use(userRouter);
    app.use(stonesRouter);

    app.get('*', (req, res) => res.render('404'));
}

module.exports = { configRoutes }