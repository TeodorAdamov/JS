import { createNewProduct } from "../data/data.js";
import { createSubmitHandler } from "../util.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const createPageTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Add Fruit</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="name" id="name" placeholder="Fruit Name"/>
            <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image"/>
            <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
            <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
            <button type="submit">Add Fruit</button>
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
        ctx.page.redirect('/fruits');
    }
}

