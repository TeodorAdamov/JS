const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

const { aboutController } = require('./controllers/about');
const { createController } = require('./controllers/create')
const { errorController } = require('./controllers/error');
const { homeController } = require('./controllers/movie');
const { detailsController } = require('./controllers/details');




const app = express();
runDB();
const hbs = handlebars.create({
    extname: '.hbs',
    defaultLayout: 'default',
});

app.set('view engine', '.hbs');
app.engine('.hbs', hbs.engine);

app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', homeController.home);
app.get('/search', homeController.search)
app.get('/about', aboutController);
app.get('/create', createController.getCreate);
app.get('/details/:id', detailsController);
app.get('*', errorController);


app.post('/create', createController.postCreate);

app.listen(3000);


async function runDB() {
    const mongoDB = 'mongodb://127.0.0.1:27017/movieMagic';
    await mongoose.connect(mongoDB);
    console.log('Database Working');
}

