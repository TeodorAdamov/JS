import { get } from "./api.js";
export function showEditForm() {
    document.getElementById('edit-form').style.display = 'block';
    document.getElementById('add-form').style.display = 'none';
}

export function showAddForm() {
    document.getElementById('edit-form').style.display = 'none';
    document.getElementById('add-form').style.display = 'block';
}

export async function populateEditForm(url, id) {
    const editForm = document.getElementById('edit-form');
    const [title, author, submitBtn] = Array.from(editForm.querySelectorAll('input'));
    editForm.dataset.id = id;
    const book = await get(url + id);
    title.value = book.title;
    author.value = book.author;
}

export function extractFormData(event) {
    const formData = new FormData(event.target)
    const title = formData.get('title');
    const author = formData.get('author');
    return [title, author]
}