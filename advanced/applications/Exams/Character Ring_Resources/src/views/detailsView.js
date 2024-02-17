import { delById, getById, hasLiked, likeCharacter, totalLikes } from "../data/data.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const detailsTemplate = (character, onDelete, onLike, likesCount) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${character.imageUrl}" alt="example1" />
        <div>
            <p id="details-category">${character.category}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p id="description">${character.description}</p>
                    <p id="more-info">${character.moreInfo}</p>
                </div>
            </div>
            <h3>Is This Useful:<span id="likes">${likesCount}</span></h3>

            <!--Edit and Delete are only for creator-->
            ${character.canEdit ? html`
            <div id="action-buttons">
                <a href="/dashboard/${character._id}/edit" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>

                <!--Bonus - Only for logged-in users ( not authors )-->
                
            </div>` : character.canLike && character.hasLiked == false ? html`
            <div id="action-buttons">
                <a @click=${onLike} href="#" id="like-btn">Like</a>
            </div>` : null}
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

        const liked = await hasLiked(id, userData._id);

        liked ? data.hasLiked = true : data.hasLiked = false
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
            characterId: id
        }
        await likeCharacter(data)
        ctx.page.redirect(`/dashboard/${id}`)
    }
}



