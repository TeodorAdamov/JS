const express = require('express');
const { configDatabase } = require('./config/database');
const { configHbs } = require('./config/handlebars');
const { configExpress } = require('./config/express');
const { configRoutes } = require('./config/routes');

const PORT = 3000;

async function start() {
    const app = express();

    await configDatabase();
    configHbs(app);
    configExpress(app);
    configRoutes(app);

    app.listen(3000, () => {
        console.log(`App running on port ${PORT}`)
    });
}

start();