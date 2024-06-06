const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')

const { aboutController } = require('./controllers/about');
const { createController } = require('./controllers/create')
const { errorController } = require('./controllers/error');
const { movieController } = require('./controllers/movie');
const { errorHandler, verifyToken, attachUserInfo } = require('./utility/utils');
const { castController } = require('./controllers/cast');
const { authController } = require('./controllers/auth');





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
app.use(cookieParser());
app.use(attachUserInfo);

//Movie Controller
app.get('/', movieController.home);
app.get('/search', movieController.search)
app.get('/details/:id', verifyToken, movieController.details);

//Authentication Controller
app.get('/login', authController.loginGet);
app.post('/login', authController.loginPost);
app.get('/register', authController.registerGet);
app.post('/register', authController.registerPost);
app.get('/logout', verifyToken, authController.logout)


//Create Controller
app.get('/create/movie', verifyToken, createController.getCreateMovie);
app.post('/create/movie', verifyToken, createController.postCreateMovie);


//Cast Controller
app.get('/create/cast', verifyToken, castController.createCastGet);
app.post('/create/cast', verifyToken, castController.createCastPost)
app.get('/attach/cast/:id', verifyToken, castController.attachCastGet);
app.post('/attach/cast/:id', verifyToken, castController.attachCastPost);

//About and errors handlers
app.get('/about', aboutController);
app.use(errorHandler);
app.get('*', errorController);



app.listen(3000);


async function runDB() {
    const mongoDB = 'mongodb://127.0.0.1:27017/movieMagic';
    await mongoose.connect(mongoDB);
    console.log('Database Working');
}

