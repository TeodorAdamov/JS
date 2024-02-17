import { createNewProduct } from "../data/data.js";
import { createSubmitHandler } from "../util.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const createPageTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Add Event</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="name" id="name" placeholder="Event" />
            <input type="text" name="imageUrl" id="event-image" placeholder="Event Image URL" />
            <input type="text" name="category" id="event-category" placeholder="Category" />
            <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>
            <input type="text" name="date" id="date" placeholder="When?" />
            <button type="submit">Add</button>
        </form>
    </div>
</section>`


export async function createPage(ctx) {
    ctx.render(createPageTemplate(createSubmitHandler(onCreate)));

    async function onCreate(data, form) {
        Object.values(data).forEach(el => {
            if (!el) {
                alert('All fields required');
                throw new Error('all fields required')
            }
        });


        await createNewProduct(data);
        form.reset();
        ctx.page.redirect('/dashboard');
    }
}

