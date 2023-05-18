function rightPlace(string, char, string2) {
    let newStr = string.replace('_', char)

    let result = newStr === string2 ? 'Matched' : 'Not Matched'
    console.log(result);
}