const { readFile } = require("../util");

function staticFileHandler(req, res) {
    if (req.url.endsWith('.css')) {

        sendFile(req, res, 'text/css')

        return true;
    } else if (req.url.endsWith('.ico')) {

        sendFile(req, res, 'image/svg+xml')

        return true;
    } else if (req.url.endsWith('.jpg')) {

        sendFile(req, res, 'image/jpg');

        return true;
    }
    return false;
}

function sendFile(req, res, contentType) {
    const data = readFile(req.url);
    res.writeHead(200, [
        'Content-Type', contentType
    ]);
    res.write(data);
    res.end();
}


module.exports = {
    staticFileHandler
}