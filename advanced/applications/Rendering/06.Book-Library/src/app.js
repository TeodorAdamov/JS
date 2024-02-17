import { render } from '../node_modules/lit-html/lit-html.js'
import { homepage, bookTemplate } from './templates.js'
import { get, post, put, del } from './api.js';
import { showAddForm, showEditForm, populateEditForm, extractFormData } from './util.js';


const url = 'http://localhost:3030/jsonstore/collections/books/'
render(homepage(), document.querySelector('body'));

document.getElementById('loadBooks').addEventListener('click', refreshBooks)
document.getElementById('add-form').addEventListener('submit', addBook)
document.querySelector('tbody').addEventListener('click', controller)
document.getElementById('edit-form').addEventListener('submit', onEdit)


async function refreshBooks() {
    const data = await get(url);
    render(Object.entries(data).map(bookTemplate), document.querySelector('tbody'));
}

async function addBook(event) {
    event.preventDefault();
    const [title, author] = extractFormData(event);

    await post(url, { title, author });
    await refreshBooks();
}

async function controller(event) {
    const id = event.target.dataset.id
    if (event.target.textContent == 'Edit') {
        showEditForm();
        populateEditForm(url, id);
    } else if (event.target.textContent == 'Delete') {
        await deleteBook(event);
    }
}



async function onEdit(event) {
    event.preventDefault();
    const id = event.target.dataset.id;
    const [title, author] = extractFormData(event);
    await put(url + id, { title, author });
    await refreshBooks();
    showAddForm();
}
async function deleteBook(event) {
    const id = event.target.dataset.id;
    await del(url + id);
    await refreshBooks();
}

