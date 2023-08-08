function matchNumber(data) {

    let pattern = /(?:^| )\+359( |-)2\1\d{3}\1\d{4}\b/g
    let match = pattern.exec(data)
    let validPhones = [];

    while (match !== null) {
        validPhones.push(match[0])
        match = pattern.exec(data)
    }

    console.log(validPhones.join(','));
}

matchNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])