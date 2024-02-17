import { getAllProducts } from "../data/data.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const dashboardTemplate = (content) => html`
${content.length > 0 ? html`
    <h2>Current Events</h2>
    <section id="dashboard">
  <!-- Display a div with information about every post (if any)-->
    ${content.map(eventTemplate)}
    </section>` : html`
    <h2>Current Events</h2>
    <h4>No Events yet.</h4>`}
<!-- Display an h4 if there are no posts -->
`

const eventTemplate = (event) => html`
<div class="event">
    <img src="${event.imageUrl}" alt="example1" />
    <p class="title">${event.name}</p>
    <p class="date">${event.date}</p>
    <a class="details-btn" href="/dashboard/${event._id}">Details</a>
</div>`

export async function dashboardPage(ctx) {
    const products = await getAllProducts();
    console.log(products);
    ctx.render(dashboardTemplate(products));
}




