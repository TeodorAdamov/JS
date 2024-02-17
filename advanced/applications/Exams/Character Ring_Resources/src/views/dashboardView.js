import { getAllProducts } from "../data/data.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const dashboardTemplate = (content) => html`
${content.length > 0 ? html`
    <h2>Characters</h2>
    <section id="characters">
  <!-- Display a div with information about every post (if any)-->
    ${content.map(eventTemplate)}
    </section>` : html`
    <h2>Characters</h2>
    <h4>No added Heroes yet.</h4>`}
<!-- Display an h4 if there are no posts -->
`

const eventTemplate = (character) => html`
<div class="character">
    <img src="${character.imageUrl}" alt="example1" />
    <div class="hero-info">
        <h3 class="category">${character.category}</h3>
        <p class="description">${character.description}</p>
        <a class="details-btn" href="/dashboard/${character._id}">More Info</a>
    </div>
</div>`

export async function dashboardPage(ctx) {
    const products = await getAllProducts();
    console.log(products);
    ctx.render(dashboardTemplate(products));
}




