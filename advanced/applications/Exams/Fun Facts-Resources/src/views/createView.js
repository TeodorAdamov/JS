import { createNewProduct } from "../data/data.js";
import { createSubmitHandler } from "../util.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const createPageTemplate = (onSubmit) => html`
<section id="create">
<div class="form">
    <h2>Add Fact</h2>
    <form @submit=${onSubmit} class="create-form">
        <input type="text" name="category" id="category" placeholder="Category" />
        <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
        <textarea id="description" name="description" placeholder="Description" rows="10"
            cols="50"></textarea>
        <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10"
            cols="50"></textarea>
        <button type="submit">Add Fact</button>
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

        const category = data.category;
        const description = data.description;
        const moreInfo = data["additional-info"];
        const imageUrl = data["image-url"];

        const dataToSend = {
            category,
            description,
            moreInfo,
            imageUrl
        }
        
        await createNewProduct(dataToSend);
        form.reset();
        ctx.page.redirect('/dashboard');
    }
}

