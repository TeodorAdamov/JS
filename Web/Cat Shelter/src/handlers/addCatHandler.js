const { readFile } = require("../util");
const path = require('path');
const fs = require('fs');
const breeds = require('../data/breeds.json');
const cats = require('../data/cats.json');



function fillBreeds(breed) {
    return `
    <option value="${breed.breed}">${breed.breed}</option>`
}



function addCat(req, res) {
    let data = [];

    const promise = new Promise((resolve, reject) => {
        createImageAndExtactFormData(req, res, (name, breed, description, imagePath) => {
            if (name !== '' && breed !== '' && description !== '' && imagePath !== '') {
                resolve({ name, breed, description, imagePath });
            } else {
                reject('Invalid data');
            }
        });
    });

    promise.then(({ name, breed, description, imagePath }) => {

        const cat = {

            name,
            breed,
            description,
            imageUrl: imagePath
        }

        cats.push(cat);


        fs.writeFile('./src/data/cats.json', JSON.stringify(cats), (err) => {
            if (err) {
                console.error('Error writing to cats.json:', err);
            } else {
                console.log('Cat added successfully!');
            }
        });


        res.writeHead(302, { 'Location': '/' });
        res.end();


    })


}

function addCatHandler(req, res) {
    const template = readFile('./views/addCat.html');

    res.writeHead(200, [
        'Content-Type', 'text/html'
    ]);
    const html = template.replace('%%breeds%%', breeds.map(fillBreeds))

    res.write(html);
    res.end();
}

module.exports = {
    addCatHandler,
    addCat
}



function createImageAndExtactFormData(req, res, callback) {
    const data = [];
    const boundary = req.headers['content-type'].split('boundary=')[1].trim();
    let name = '';
    let breed = '';
    let description = '';
    let imagePath = '';

    req.on('data', chunk => data.push(chunk.toString('binary')));
    req.on('end', () => {
        const body = data.join('');


        // Extracting breed
        const breedIndex = body.indexOf('breed');
        const lineAfterBreed = body.indexOf('\n', breedIndex);
        const breedLength = body.indexOf('\n', lineAfterBreed + 3) - lineAfterBreed;
        breed = body.slice(lineAfterBreed + 3, lineAfterBreed + breedLength).trim();

        // Extracting name
        const nameIndex = body.indexOf('name');
        const lineAfterName = body.indexOf('\n', nameIndex);
        const nameLength = body.indexOf('\n', lineAfterName + 3) - lineAfterName;
        name = body.slice(lineAfterName + 3, lineAfterName + nameLength).trim();

        const descriptionIndex = body.indexOf('description');
        const lineAfterDescription = body.indexOf('\n', descriptionIndex);
        const descriptionLength = body.indexOf('\n', lineAfterDescription + 3) - lineAfterDescription;
        description = body.slice(lineAfterDescription + 3, lineAfterDescription + descriptionLength).trim();

        const lineIndex = body.indexOf('\n', (lineAfterDescription + 5 + descriptionLength));


        const fileData = body.slice(lineIndex, body.indexOf(boundary, lineIndex));

        const pattern = /filename="(.+)"/;
        const filename = pattern.exec(fileData)[1];

        const windowsPattern = /\r\n\r\n/;
        const linuxPattern = /\n\n/;

        let match = windowsPattern.exec(fileData);
        if (match == null) {
            match = linuxPattern.exec(fileData);
        }

        if (match) {
            const file = fileData.slice(match.index).trim();
            const prefix = ('00000' + (Math.random() * 9999999 | 0)).slice(-5);
            imagePath = `/src/data/images/${prefix}_${filename}`;
            fs.writeFileSync(`./src/data/images/${prefix}_${filename}`, file, 'binary');
        }


        callback(name, breed, description, imagePath);
    })

}