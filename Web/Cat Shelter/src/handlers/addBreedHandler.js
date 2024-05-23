const { readFile } = require("../util");
const fs = require('fs');
const breeds = require('../data/breeds.json');

function addBreed(req, res) {
    let body = '';


    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const formData = new URLSearchParams(body);
        const breed = formData.get('breed');
        breeds.push({ breed: breed });
        console.log(breeds);

        fs.writeFile('./src/data/breeds.json', JSON.stringify(breeds), (err) => {
            console.log('Error: ', err);
        })
    })
    res.writeHead(302, { 'Location': '/cats/add-breed' });
    res.end();
}

function addBreedHandler(req, res) {
    const html = readFile('./views/addBreed.html');
    res.writeHead(200, [
        'Content-Type', 'text/html'
    ]);


    res.write(html);
    res.end();
}

module.exports = {
    addBreedHandler,
    addBreed
}