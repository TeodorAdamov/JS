import { editById, getById } from "../data/data.js";
import { createSubmitHandler } from "../util.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const editTemplate = (data, onSubmit) => html`
<section id="edit">
    <div class="form">
        <img class="border" src="./images/border.png" alt="">
        <h2>Edit Character</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="category" id="category" placeholder="Character Type" value=${data.category} />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" value=${data.imageUrl} />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10">${data.description}</textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2" cols="10">${data.moreInfo}</textarea>
            <button type="submit">Edit</button>
        </form>
        <img class="border" src="./images/border.png" alt="">
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

        await editById(id, dataToSend);
        ctx.page.redirect('/dashboard/' + id);
    }

}



