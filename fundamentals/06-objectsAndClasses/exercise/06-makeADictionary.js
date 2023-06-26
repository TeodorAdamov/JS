function makeADictionary(data) {

    let dictionary = {};

    for (let str of data) {

        let obj = JSON.parse(str);
        let objKey = Object.keys(obj);
        dictionary[objKey] = obj[objKey];
    }

    Object.keys(dictionary)
        .sort((a, b) => a.localeCompare(b))
        .forEach(a => console.log(`Term: ${a} => Definition: ${dictionary[a]}`));


}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])