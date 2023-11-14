import { createIdea } from "../api/data.js";

const createPage = document.getElementById('createPage');
const form = createPage.querySelector('form');
form.addEventListener('submit', onSubmit)

let ctx = null
export function showCreate(context) {
    context.showSection(createPage);
    ctx = context;
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const { title, description, imageURL } = Object.fromEntries(formData.entries());

    await createIdea({
        title,
        description,
        img: imageURL
    })
    ctx.goTo('/catalog')
}