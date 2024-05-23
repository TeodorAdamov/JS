const http = require('http');
const { homeHandler } = require('./src/handlers/homeHandler.js');
const { staticFileHandler } = require('./src/handlers/staticFileHandler.js');
const { addCatHandler, addCat } = require('./src/handlers/addCatHandler.js');
const { addBreedHandler, addBreed } = require('./src/handlers/addBreedHandler.js');


const routes = {
    "/": homeHandler,
    "/index.html": homeHandler,
    "/cats/add-cat": addCatHandler,
    "/cats/add-breed": addBreedHandler,
    "/submitBreed": addBreed,
    "/submitCat": addCat
}

http.createServer((req, res) => {
    const route = routes[req.url];

    if (typeof route == 'function') {
        route(req, res);
        return;
    } else if (staticFileHandler(req, res)) {
        return;
    }

    res.writeHead(404, [
        'Content-Type', 'text/plain'
    ]);
    res.write('404 Not Found');
    res.end();

}).listen(3000)