function jsonToHTML(objArr) {

    const dataArr = JSON.parse(objArr)
    console.log('<table>');
    let result = '<tr>'
    Object.keys(dataArr[0]).forEach(key => {
        result += `<th>${key}</th>`
    })
    result += '</tr>'
    console.log(result);

    dataArr.forEach(obj => {
        let curResult = '<tr>'
        Object.keys(obj).forEach(key => {
            curResult += `<td>${obj[key]}</td>`
        })
        curResult += '</tr>'
        console.log(curResult);
    })
    console.log('</table>');
}

jsonToHTML(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`

)