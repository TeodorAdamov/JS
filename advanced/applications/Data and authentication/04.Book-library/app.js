const submitForm = document.querySelector('form');
const url = 'http://localhost:3030/jsonstore/collections/books';
document.getElementById('loadBooks').addEventListener('click', loadAll);
document.querySelector('tbody').addEventListener('click', bodyButtons);
submitForm.addEventListener('submit', chooseForm)
const hiddenInput = document.createElement('input')
hiddenInput.type = 'hidden'
hiddenInput.name = 'id'
submitForm.appendChild(hiddenInput);


async function loadAll() {
    const response = await fetch(url);
    const data = await response.json();
    document.querySelector('tbody').textContent = '';
    data.forEach(book => {
        createBook(book);
    })

}

async function chooseForm(event) {
    event.preventDefault();
    if (event.submitter.textContent === 'Submit') {
        submitBook();
    } else if (event.submitter.textContent === 'Save') {
        onSave();
    }
}

async function submitBook() {
    const formData = new FormData(submitForm);
    const { title, author } = Object.fromEntries(formData.entries());
    if (!title || !author) {
        return;
    }

    const book = {
        author,
        title,
    }

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book)
    }
    submitForm.reset();
    const response = await fetch(url, options);
    console.log(await response.json())
    loadAll()
}

function bodyButtons(event) {
    event.preventDefault();
    if (event.target.textContent === 'Edit') {
        editBook(event);
    } else if (event.target.textContent === 'Delete') {
        deleteBook(event);
    }
}



async function editBook(event) {
    const id = event.target.parentElement.parentElement.dataset.id;
    debugger
    const response = await fetch(`${url}/${id}`)
    const book = await response.json();
    const [title, author, _id] = Array.from(submitForm.querySelectorAll('input'));
    title.value = book.title;
    author.value = book.author;
    _id.value = id;
    submitForm.querySelector('h3').textContent = 'Edit FORM';
    submitForm.querySelector('button').textContent = 'Save';
}

async function onSave() {
    const formData = new FormData(submitForm);
    const { title, author, id } = Object.fromEntries(formData.entries());
    if (!title || !author || !id) {
        return;
    }
    await fetch(`${url}/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ author, title, _id: id })
    })
    submitForm.querySelector('h3').textContent = 'FORM';
    submitForm.querySelector('button').textContent = 'Submit';
    submitForm.reset();
    loadAll();
}


async function deleteBook(event) {
    const id = event.target.parentElement.parentElement.dataset.id;
    await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'delete'
    })
    loadAll()
}

function createBook(bookObj) {
    const { author, title, _id } = bookObj;
    const tBody = document.querySelector('tbody');
    const row = createHTML('tr', '', tBody, _id);
    createHTML('td', title, row);
    createHTML('td', author, row);
    const buttonTD = createHTML('td', '', row);
    createHTML('button', 'Edit', buttonTD);
    createHTML('button', 'Delete', buttonTD);
}

function createHTML(type, text, parent, id) {
    const el = document.createElement(type);
    text ? el.textContent = text : '';
    id ? el.dataset.id = id : '';
    parent ? parent.appendChild(el) : '';
    return el;
}