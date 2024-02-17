import { getAllProducts } from "../data/data.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const dashboardTemplate = (content) => html`
${content.length > 0 ? html`
    <h2>Fun Facts</h2>
    <section id="dashboard">
  <!-- Display a div with information about every post (if any)-->
    ${content.map(factTemplate)}
    </section>` : html`
    <h2>Fruits</h2>
    <h2>No Fun Facts yet.</h2>`}
 <!-- Display an h2 if there are no posts -->
`

const factTemplate = (fact) => html`
<div class="fact">
    <img src="${fact.imageUrl}" alt="example1" />
    <h3 class="category">${fact.category}</h3>
    <p class="description">${fact.description}</p>
    <a class="details-btn" href="/dashboard/${fact._id}">More Info</a>
</div>`

export async function dashboardPage(ctx) {
    const products = await getAllProducts();
    ctx.render(dashboardTemplate(products));
}




