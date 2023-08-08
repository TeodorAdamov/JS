function matchNames(names) {

    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g
    let validNames = [];
    let match = pattern.exec(names)

    while (match !== null) {
        validNames.push(match[0])
        match = pattern.exec(names)
    }

    console.log(validNames.join(' '));
}

matchNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov")