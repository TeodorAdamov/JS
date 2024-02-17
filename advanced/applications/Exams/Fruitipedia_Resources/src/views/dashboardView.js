import { getAllProducts } from "../data/data.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const dashboardTemplate = (content) => html`
${content.length > 0 ? html`
    <h2>Fruits</h2>
    <section id="dashboard">
  <!-- Display a div with information about every post (if any)-->
    ${content.map(fruitTemplate)}
    </section>` : html`
    <h2>Fruits</h2>
    <h2>No fruit info yet.</h2>`}
 <!-- Display an h2 if there are no posts -->
`

const fruitTemplate = (fruit) => html`
<div class="fruit">
    <img src="${fruit.imageUrl}" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/fruits/${fruit._id}">More Info</a>
</div>`

export async function dashboardPage(ctx) {
    const products = await getAllProducts();
    ctx.render(dashboardTemplate(products));
}