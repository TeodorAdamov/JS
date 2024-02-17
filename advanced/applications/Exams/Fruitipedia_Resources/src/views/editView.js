import { editById, getById } from "../data/data.js";
import { createSubmitHandler } from "../util.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const editTemplate = (data, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Fruit</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="name" id="name" placeholder="Fruit Name" .value="${data.name}" />
            <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" .value="${data.imageUrl}" />
            <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50">${data.description}</textarea>
            <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50">${data.nutrition}</textarea>
            <button type="submit">post</button>
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
        ctx.page.redirect('/fruits/' + id);
    }

}