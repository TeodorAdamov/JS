import { deleteById, getById } from "../api/data.js";

const detailsPage = document.getElementById('detailsPage');

let ctx = null

export async function showDetails(context, id) {
    ctx = context;
    const idea = await getById(id);

    context.showSection(detailsPage);

    const user = JSON.parse(localStorage.getItem('user'));
    const isOwner = user && user.id === idea._ownerId;

    detailsPage.innerHTML = createDetailsPage(idea, isOwner);

    if (isOwner) {
        detailsPage.querySelector('#DeleteBtn').addEventListener('click', async (event) => {
            event.preventDefault();
            const choice = confirm('Are you sure you want to delete this idea?')
            if (choice) {
                await deleteById(id);
                context.goTo('/catalog');
            }
        })
    }
}


function createDetailsPage(idea, isOwner) {
    let html = `
    <img class="det-img" src="${idea.img}" />
    <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
    </div>
    `
    if (isOwner) {
        html += `
        <div class="text-center">
            <a id="DeleteBtn" class="btn detb" href="">Delete</a>
        </div>`;
    }


    return html;
}