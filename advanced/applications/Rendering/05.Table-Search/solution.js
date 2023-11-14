import { html, render } from './node_modules/lit-html/lit-html.js'
const url = 'http://localhost:3030/jsonstore/advanced/table';

window.addEventListener('DOMContentLoaded', renderItems);
document.querySelector('#searchBtn').addEventListener('click', onClick);

//html template
const emptySpace = ' '
const tableTemplate = (student) => html`
    <tr>
        <td>${student.firstName + emptySpace + student.lastName}</td>
        <td>${student.email}</td>
        <td>${student.course}</td>
    </tr>`

//look for matches 
function onClick() {
    const rowArray = Array.from(document.querySelectorAll('tbody tr'))
    rowArray.forEach(row => row.className = '');
    const input = document.getElementById('searchField');
    if (!input.value) {
        return alert('You must fill the search field!')
    }

    const filterSearch = rowArray.filter(row => {
        const match = Array.from(row.children).find(td => td.textContent.toLowerCase().includes(input.value.toLowerCase()))
        if(match){
            return true
        }
    });

    filterSearch.forEach(row => row.className = 'select');
    input.value = '';
}

async function renderItems() {
    return render(Object.values(await getData()).map(tableTemplate), document.querySelector('tbody'))
}
async function getData() {
    const res = await fetch(url)
    return res.json();
}