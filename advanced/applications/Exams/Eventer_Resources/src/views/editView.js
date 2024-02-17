import { editById, getById } from "../data/data.js";
import { createSubmitHandler } from "../util.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const editTemplate = (data, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Event</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="name" id="name" placeholder="Event" value=${data.name} />
            <input type="text" name="imageUrl" id="event-image" placeholder="Event Image" value=${data.imageUrl} />
            <input type="text" name="category" id="event-category" placeholder="Category" value=${data.category} />
            <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50">${data.description}</textarea>
            <label for="date-and-time">Event Time:</label>
            <input type="text" name="date" id="date" placeholder="When?" value=${data.date} />
            <button type="submit">Edit</button>
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



