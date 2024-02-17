import { createNewProduct } from "../data/data.js";
import { createSubmitHandler } from "../util.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const createPageTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <img class="border" src="./images/border.png" alt="">
        <h2>Add Character</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="category" id="category" placeholder="Character Type" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2" cols="10"></textarea>
            <button type="submit">Add Character</button>
        </form>
        <img class="border" src="./images/border.png" alt="">
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
        console.log(data);
        const category = data['category'];
        const imageUrl = data['image-url'];
        const description = data['description'];
        const moreInfo = data['additional-info']

        const dataToSend = {
            category,
            imageUrl,
            description,
            moreInfo
        }

        await createNewProduct(dataToSend);
        form.reset();
        ctx.page.redirect('/dashboard');
    }
}

