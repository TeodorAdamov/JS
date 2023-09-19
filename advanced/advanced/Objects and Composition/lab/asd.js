function jsonToHTMLTable(json) {
    const parsedText = JSON.parse(json);

    const escapedChar = char =>
        `${char}`.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
            .replace(/\//g, "&#x2F;");

    const row = (tag, data) =>
        `<tr>${data.map(x => `<${tag}>${escapedChar(x)}</${tag}>`).join("")}</tr>`;

    return `<table>
                ${row("th", Object.keys(parsedText[0]))}
                ${parsedText.map(x => row("td", Object.values(x))).join("\n")}
            </table>`
}

console.log(jsonToHTMLTable(`
[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
))