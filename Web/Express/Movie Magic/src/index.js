const express = require('express');
const handlebars = require('express-handlebars');
const { homeController } = require('./home');
const { aboutController } = require('./about');
const { createController } = require('./create');
const { errorController } = require('./error');




const app = express();

const hbs = handlebars.create({
    extname: '.hbs',
    defaultLayout: 'default',
});

app.set('view engine', '.hbs');
app.engine('.hbs', hbs.engine);

app.use('/static', express.static('static'))

app.get('/', homeController);
app.get('/about', aboutController);
app.get('/create', createController);
// app.get('/details/:id', detailsController);
app.get('*', errorController)

app.listen(3000);