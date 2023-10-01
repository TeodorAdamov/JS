function validator(httpObject) {

    const uriPattern = /^[a-zA-Z0-9.]+$|\*$/
    const messagePattern = /^[^<>\\&\'\"]*$/

    if (!httpObject.hasOwnProperty('method')) {
        throw new Error('Invalid request header: Invalid Method');
    } else if (!httpObject.hasOwnProperty('uri')) {
        throw new Error('Invalid request header: Invalid URI');
    } else if (!httpObject.hasOwnProperty('version')) {
        throw new Error('Invalid request header: Invalid Version');
    } else if (!httpObject.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }

    if (httpObject.method !== 'GET' && httpObject.method !== 'POST' && httpObject.method !== 'DELETE' && httpObject.method !== 'CONNECT') {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (httpObject.uri.match(uriPattern) === null) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (httpObject.version !== 'HTTP/0.9' && httpObject.version !== 'HTTP/1.0' && httpObject.version !== 'HTTP/1.1' && httpObject.version !== 'HTTP/2.0') {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (httpObject.message.match(messagePattern) === null && httpObject.message !== '') {
        throw new Error('Invalid request header: Invalid Message');
    }

    return httpObject

}


console.log(validator({
    method: 'GET',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: ''
}))



