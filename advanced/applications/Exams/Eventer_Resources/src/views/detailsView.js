import { delById, getById, isUserGoing, goEvent, totalGoing } from "../data/data.js";
import { html } from "../../node_modules/lit-html/lit-html.js"

const detailsTemplate = (event, onDelete, onGo, goingCount) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${event.imageUrl}" alt="example1" />
        <p id="details-title">${event.name}</p>
        <p id="details-category">
            Category: <span id="categories">${event.category}</span>
        </p>
        <p id="details-date">
            Date:<span id="date">${event.date}</span></p>
        <div id="info-wrapper">
            <div id="details-description">
                <span>${event.description}</span>
            </div>
        </div>
        <h3>Going: <span id="go">${goingCount}</span> times.</h3>

        ${event.canEdit ? html`
        <div id="action-buttons">
            <a href="/dashboard/${event._id}/edit" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="#" id="delete-btn">Delete</a>
            <!--Bonus - Only for logged-in users ( not authors )-->   
        </div>` : event.canGo && event.isGoing == false ? html`
        <div id="action-buttons">
        <a @click=${onGo} href="#" id="go-btn">Going</a>`: null}
        </div>
        <!--Edit and Delete are only for creator-->
    </div>
</section>`

export async function detailsPage(ctx) {
    const id = ctx.params.id
    const data = await getById(id);
    const userData = ctx.userData;
    const goingCount = await totalGoing(id);

    if (userData) {
        data.canEdit = userData._id == data._ownerId;
        data.canGo = userData._id != data._ownerId;

        const isGoing = await isUserGoing(id, userData._id);

        isGoing ? data.isGoing = true : data.isGoing = false
    }
    ctx.render(detailsTemplate(data, onDelete, onGo, goingCount));


    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item');
        if (choice) {
            await delById(id);
            ctx.page.redirect('/dashboard')
        }
    }

    async function onGo() {
        const data = {
            eventId: id
        }
        await goEvent(data)
        ctx.page.redirect(`/dashboard/${id}`)
    }
}



