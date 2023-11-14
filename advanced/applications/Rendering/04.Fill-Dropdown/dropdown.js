import { html, render } from './node_modules/lit-html/lit-html.js'
const url = 'http://localhost:3030/jsonstore/advanced/dropdown'
window.addEventListener('DOMContentLoaded', dropDownFiller);

const dropDownTemplate = (item) => html`<option value="${item._id}">${item.text}</option>`

document.querySelector('form').addEventListener('submit', onSubmit)

async function onSubmit(event) {
    event.preventDefault();
    const text = document.getElementById('itemText');
    if (!text.value) {
        alert('You must fill the empty text field!')
    }

    await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text.value })
    })
    dropDownFiller()
}

async function dropDownFiller() {
    return render(Object.values(await getItems()).map(dropDownTemplate), document.getElementById('menu'))
}

async function getItems() {
    const res = await fetch(url);
    const data = await res.json()
    return data
}