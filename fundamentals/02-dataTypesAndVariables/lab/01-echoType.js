function echoType(data) {
    if (typeof (data) === 'string') {
        console.log('string');
        console.log(data);
    } else if (typeof (data) === 'number') {
        console.log('number');
        console.log(data);
    } else {
        console.log('object');
        console.log('Parameter is not suitable for printing');
    }
}