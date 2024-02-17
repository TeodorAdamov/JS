import { editById, getById } from "../data/data.js";
import { createSubmitHandler } from "../util.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const editTemplate = (data, onSubmit) => html`
<section id="edit">
    <h2>Edit Motorcycle</h2>
    <div class="form">
        <h2>Edit Motorcycle</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="model" id="model" placeholder="Model" .value=${data.model} />
            <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" .value=${data.imageUrl} />
            <input type="number" name="year" id="year" placeholder="Year" .value=${data.year} />
            <input type="number" name="mileage" id="mileage" placeholder="mileage" .value=${data.mileage} />
            <input type="number" name="contact" id="contact" placeholder="contact" .value=${data.contact} />
            <textarea id="about" name="about" placeholder="about" rows="10" cols="50">${data.about}</textarea>
            <button type="submit">Edit Motorcycle</button>
        </form>
    </div>
</section>`


export async function editPage(ctx) {
    const id = ctx.params.id
    const data = await getById(id);

    ctx.render(editTemplate(data, createSubmitHandler(onEdit)));


    async function onEdit(data) {
        Object.values(data).forEach(el => {
            if (!el) {
                alert('All fields required');
                throw new Error('all fields required')
            }
        });

        await editById(id, data);
        ctx.page.redirect('/dashboard/' + id);
    }

}



