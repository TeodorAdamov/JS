import { delById, getById, hasUserLiked, likeFact, totalLikes } from "../data/data.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const detailsTemplate = (motorcycle, onDelete,) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${motorcycle.imageUrl}" alt="example1" />
        <p id="details-title">${motorcycle.model}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="year">${motorcycle.year}</p>
                <p class="mileage">${motorcycle.mileage}</p>
                <p class="contact">Contact Number: ${motorcycle.contact}</p>
                <p id="motorcycle-description">${motorcycle.about}</p>
            </div>
            <!--Edit and Delete are only for creator-->
            ${motorcycle.canEdit ? html`
            <div id="action-buttons">
                <a href="/dashboard/${motorcycle._id}/edit" id="edit-btn">Edit</a>
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
            ctx.page.redirect('/dashboard')
        }
    }
}



