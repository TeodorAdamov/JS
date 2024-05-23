
const fs = require('fs');
const path = require('path');

function readFile(filePath) {
    const file = fs.readFileSync(path.join('./', filePath));
    if(filePath.endsWith('.jpg')) {
        return file;

    } else {
        return file.toString();
    }
    
}

module.exports = {
    readFile
}