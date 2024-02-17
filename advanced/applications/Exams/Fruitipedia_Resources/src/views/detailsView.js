import { delById, getById } from "../data/data.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const detailsTemplate = (fruit, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${fruit.imageUrl}" alt="example1" />
        <p id="details-title">${fruit.name}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p>${fruit.description}</p>
                <p id="nutrition">Nutrition</p>
                <p id="details-nutrition">${fruit.nutrition}</p>
            </div>
            <!--Edit and Delete are only for creator-->
            ${fruit.canEdit ? html`
            <div id="action-buttons">
                <a href="/fruits/${fruit._id}/edit" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>` : null}
        </div>
    </div>
</section>`

export async function detailsPage(ctx) {
    const id = ctx.params.id
    const data = await getById(id);
    const userData = ctx.userData;
    if (userData) {
        data.canEdit = userData._id == data._ownerId;
    }
    ctx.render(detailsTemplate(data, onDelete));


    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item');
        if (choice) {
            await delById(id);
            ctx.page.redirect('/fruits')
        }
    }
}