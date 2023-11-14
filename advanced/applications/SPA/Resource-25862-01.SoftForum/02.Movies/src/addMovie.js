import { views } from "./views.js";
import { showHome } from "./home.js";
const moviesUrl = 'http://localhost:3030/data/movies'

export function showAddMovieSection() {
    if (sessionStorage.getItem('accessToken')) {
        document.getElementById('container').replaceChildren(views.navigation)
        document.getElementById('container').appendChild(views.addMovieSection)
        document.getElementById('container').appendChild(views.footer)
    }
}

views.addMovieSection.querySelector('form').addEventListener('submit', addMovie)

async function addMovie(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { title, description, img } = Object.fromEntries(formData.entries());

    if (!title || !description || !img) {
        return alert('All fields required');
    }

    try {
        const response = await fetch(moviesUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-authorization': sessionStorage.getItem('accessToken')
            },
            body: JSON.stringify({ title, description, img })
        })

        if (!response.ok) {
            const error = await response.json()
            throw error
        }
        showHome();
    } catch (err) {
        alert(err.message)
    }
}