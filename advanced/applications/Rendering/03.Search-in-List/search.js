import { towns } from "./towns.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

document.getElementById('towns').appendChild(document.createElement('ul'))

//render towns
const townTemplate = (town) => html`<li>${town}</li>`
render(towns.map(townTemplate), document.querySelector('ul'))

//get all li's as an array
const liArray = Array.from(document.querySelectorAll('li'));

//event listener
document.querySelector('button').addEventListener('click', (event) => search(event, liArray))



function search(event, liArr) {
    const readInput = document.getElementById('searchText');
    if (!readInput.value) {
        alert('You must fill the search field!')
    }
    const filtered = liArr.filter(el => el.textContent.includes(readInput.value))
    liArr.forEach(el => el.className = '')
    filtered.forEach(el => el.className = 'active')
    document.getElementById('result').textContent = `${filtered.length} matches found`
}