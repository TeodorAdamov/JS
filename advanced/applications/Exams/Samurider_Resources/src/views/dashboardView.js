import { getAllProducts } from "../data/data.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const dashboardTemplate = (content) => html`
${content.length > 0 ? html`
    <h2>Available Motorcycles</h2>
    <section id="dashboard">
  <!-- Display a div with information about every post (if any)-->
    ${content.map(motorcycleTemplate)}
    </section>` : html`
    <h2>Available Motorcycles</h2>
    <h2>No avaliable motorcycles yet.</h2>`}
 <!-- Display an h2 if there are no posts -->
`

const motorcycleTemplate = (motorcycle) => html`
<div class="motorcycle">
    <img src="${motorcycle.imageUrl}" alt="example1" />
    <h3 class="model">${motorcycle.model}</h3>
    <p class="year">${motorcycle.year}</p>
    <p class="mileage">${motorcycle.mileage}</p>
    <p class="contact">Contact Number: ${motorcycle.contact}</p>
    <a class="details-btn" href="/dashboard/${motorcycle._id}">More Info</a>
</div>`

export async function dashboardPage(ctx) {
    const products = await getAllProducts();
    console.log(products);
    ctx.render(dashboardTemplate(products));
}




