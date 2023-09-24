function solve() {
    let text = document.getElementById('text').value;
    const namingConvention = document.getElementById('naming-convention').value
    const result = document.getElementById('result');

    text = text.toLowerCase();
    const words = text.split(' ');
    let newWord = '';
    const resultArr = [];

    words.forEach((element, i) => {
        if (namingConvention === 'Pascal Case') {
            newWord = element[0].toUpperCase() + element.slice(1)
        } else if (namingConvention === 'Camel Case') {

            if (i > 0) {
                newWord = element[0].toUpperCase() + element.slice(1)
            } else {
                resultArr.push(element);
            }
        } else {
            
            newWord = 'Error!'
        }
        resultArr.push(newWord);
    });

    if (resultArr[0] === 'Error!') {
        result.textContent = 'Error!'
    } else {
        result.textContent = resultArr.join('');
    }
}