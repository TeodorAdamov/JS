import { delById, getById, hasUserLiked, likeFact, totalLikes } from "../data/data.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const detailsTemplate = (fact, onDelete, onLike, likesCount) => html`
<section id="details">
<div id="details-wrapper">
    <img id="details-img" src="${fact.imageUrl}" alt="example1" />
    <p id="details-category">${fact.category}</p>
    <div id="info-wrapper">
        <div id="details-description">
            <p id="description">${fact.description}</p>
            <p id="more-info">${fact.moreInfo}</p>
        </div>
        <h3>Likes:<span id="likes">${likesCount}</span></h3>

        <!--Edit and Delete are only for creator-->
        ${fact.canEdit ? html`
        <div id="action-buttons">
            <a href="/dashboard/${fact._id}/edit" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>

            <!--Bonus - Only for logged-in users ( not authors )-->
        </div>` : fact.canLike && fact.hasLiked == false ? html`
        <div id="action-buttons">
            <a @click=${onLike} href="#" id="like-btn">Like</a>` : null}
        </div>    
    </div>
</div>
</section>`

export async function detailsPage(ctx) {
    const id = ctx.params.id
    const data = await getById(id);
    const userData = ctx.userData;
    const likesCount = await totalLikes(id);


    if (userData) {
        data.canEdit = userData._id == data._ownerId;
        data.canLike = userData._id != data._ownerId;

        const hasLiked = await hasUserLiked(id, userData._id);

        hasLiked ? data.hasLiked = true : data.hasLiked = false
    }
    ctx.render(detailsTemplate(data, onDelete, onLike, likesCount));


    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item');
        if (choice) {
            await delById(id);
            ctx.page.redirect('/dashboard')
        }
    }

    async function onLike() {
        const data = {
            factId: id
        }
        await likeFact(data)
    }
}



