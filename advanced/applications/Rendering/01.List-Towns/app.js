import { html, render } from './node_modules/lit-html/lit-html.js'

document.getElementById('root').appendChild(document.createElement('ul'));

const myTemplate = (town) => html`<li>${town}</li>`


document.getElementById('btnLoadTowns').addEventListener('click', (event) => {
    event.preventDefault()
    const input = document.querySelector('input');

    if (!input.value) {
        alert('Fill towns separated with comma and whitespace (", ")')
    }

    const towns = input.value.split(', ');
    render(towns.map(myTemplate), document.querySelector('ul'));
    
})



