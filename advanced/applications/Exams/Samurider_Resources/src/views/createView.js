import { createNewProduct } from "../data/data.js";
import { createSubmitHandler } from "../util.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const createPageTemplate = (onSubmit) => html`
<section id="create">
    <h2>Add Motorcycle</h2>
    <div class="form">
        <h2>Add Motorcycle</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="model" id="model" placeholder="Model" />
            <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" />
            <input type="number" name="year" id="year" placeholder="Year" />
            <input type="number" name="mileage" id="mileage" placeholder="mileage" />
            <input type="text" name="contact" id="contact" placeholder="contact" />
            <textarea id="about" name="about" placeholder="about" rows="10" cols="50"></textarea>
            <button type="submit">Add Motorcycle</button>
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

        // const { model, imageUrl, year, mileage, contact, about } = data
        // const dataToSend = {
        //     model,
        //     imageUrl,
        //     year,
        //     mileage,
        //     contact,
        //     about
        // }

        await createNewProduct(data);
        form.reset();
        ctx.page.redirect('/dashboard');
    }
}

