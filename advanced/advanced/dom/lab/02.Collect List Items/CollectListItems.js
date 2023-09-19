function extractText() {
    const elements = document.getElementById('items').children;
    const res = document.getElementById('result')

    const textArr = Array.from(elements).map(li => li.textContent);
    const result = textArr.join('\n');
    res.textContent = result;

}

