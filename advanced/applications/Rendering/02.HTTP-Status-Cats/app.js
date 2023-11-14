import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const section = document.getElementById('allCats');
section.appendChild(document.createElement('ul'));

const catTemplate = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>`


render(cats.map(catTemplate), document.querySelector('ul'));

section.addEventListener('click', (event) => {
    if (event.target.className == 'showBtn') {
        const info = event.target.parentElement.querySelector('div');
        if (info.style.display == 'none') {
            info.style.display = 'block';
            event.target.textContent = 'Hide status code'
        } else {
            info.style.display = 'none';
            event.target.textContent = 'Show status code'
        }
    }
})