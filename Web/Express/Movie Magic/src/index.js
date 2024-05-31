const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

const { aboutController } = require('./controllers/about');
const { createController } = require('./controllers/create')
const { errorController } = require('./controllers/error');
const { movieController } = require('./controllers/movie');
const { errorHandler } = require('./utility/utils');
const { createCast, attachCast, castController } = require('./controllers/cast');





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


app.get('/', movieController.home);
app.get('/search', movieController.search)
app.get('/details/:id', movieController.details);
app.get('/create/movie', createController.getCreateMovie);
app.post('/create/movie', createController.postCreateMovie);
app.get('/create/cast', castController.createCastGet);
app.post('create/cast', castController.createCastPost)
app.get('/attach/cast/:id', castController.attachCastGet);
app.post('/attach/cast/:id', castController.attachCastPost);
app.get('/about', aboutController);


app.use(errorHandler);
app.get('*', errorController);



app.listen(3000);


async function runDB() {
    const mongoDB = 'mongodb://127.0.0.1:27017/movieMagic';
    await mongoose.connect(mongoDB);
    console.log('Database Working');
}

