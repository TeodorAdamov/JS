function charactersInRange(char1, char2) {
    let firstCharCode = char1.charCodeAt()
    let secondCharCode = char2.charCodeAt()
    let result = []

    if (secondCharCode < firstCharCode) {
        for (let curElement = secondCharCode + 1; curElement < firstCharCode; curElement++) {
           result.push(String.fromCharCode(curElement));
        }
    } else {
        for (let curElement = firstCharCode + 1; curElement < secondCharCode; curElement++) {
            result.push(String.fromCharCode(curElement));
        }
    }

    console.log(result.join(' '));
}
charactersInRange('#',
':')