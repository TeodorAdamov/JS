import { html } from '../node_modules/lit-html/lit-html.js'

export const homepage = () => html`
<button id="loadBooks">LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>
<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>
<form id="edit-form" style="display: none">
<h3>Edit book</h3>
<label>TITLE</label>
<input type="text" name="title" placeholder="Title...">
<label>AUTHOR</label>
<input type="text" name="author" placeholder="Author...">
<input type="submit" value="Save"></form>`

export const bookTemplate = ([id, book]) => html`
<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
        <button data-id="${id}">Edit</button>
        <button data-id="${id}">Delete</button>
    </td>
</tr>`
