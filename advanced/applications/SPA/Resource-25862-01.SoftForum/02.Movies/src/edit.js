import { views } from "./views.js";
import { movieDetailsPage } from "./details.js";
const moviesUrl = 'http://localhost:3030/data/movies/'

export async function showEditForm(event, id) {
    try {
        const response = await fetch(moviesUrl + id)
        if (!response.ok) {
            const error = await response.json();
            throw error
        }
        const movieData = await response.json();
        document.getElementById('container').replaceChildren(views.navigation);
        document.getElementById('container').appendChild(views.editMovie);
        document.getElementById('container').appendChild(views.footer);

        const [img, title] = Array.from(document.querySelectorAll('#edit-movie input'));
        const description = document.querySelector('#edit-movie textarea');

        document.querySelector('button').dataset.id = id;
        title.value = movieData.title;
        description.value = movieData.description;
        img.value = movieData.img;
    } catch (err) {
        alert(err.message)
    }
}


export async function onEdit(event) {
    event.preventDefault();
    const movieId = event.submitter.dataset.id;
    const formData = new FormData(event.target);
    const { title, description, img } = Object.fromEntries(formData.entries());
    if (!title, !description, !img) {
        return alert('All fields required');
    }
    try {
        const response = await fetch(moviesUrl + movieId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('accessToken')
            },
            body: JSON.stringify({ title, description, img })
        })
        if (!response.ok) {
            const error = await response.json();
            throw error
        }
        const data = await response.json()

    } catch (err) {
        alert(err.message)
    }
    
    movieDetailsPage('', movieId)
}