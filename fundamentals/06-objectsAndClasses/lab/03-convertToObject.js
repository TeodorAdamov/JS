function convertToObject(objectInJsonFormat) {

    let myObj = JSON.parse(objectInJsonFormat);

    for(let key of Object.keys(myObj)) {
        console.log(`${key}: ${myObj[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')