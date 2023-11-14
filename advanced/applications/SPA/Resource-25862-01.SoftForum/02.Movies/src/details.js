import { showHome } from "./home.js";
import { views } from "./views.js";
import { showEditForm } from "./edit.js";
import { likeMovie, getLikes, specificUserLike } from "./likes.js";
const moviesUrl = 'http://localhost:3030/data/movies/'

export const movieDetails = (event) => movieDetailsPage(event)
export async function movieDetailsPage(event, id) {
    let movieId;

    if (id) {
        movieId = id;
        try {
            const response = await fetch(moviesUrl + movieId);
            if (!response.ok) {
                const error = await response.json();
                throw error
            }
            const movieData = await response.json();
            const likesCount = await getLikes(movieId)
            const isLiked = await specificUserLike(movieId, sessionStorage.getItem('id'))

            
            const movieDetailsSection = displayMovieDetails(movieData, likesCount, isLiked);
            document.getElementById('container').replaceChildren(views.navigation);
            document.getElementById('container').appendChild(movieDetailsSection);
            document.getElementById('container').appendChild(views.footer);
            const deleteBtn = document.querySelector('a.btn.btn-danger');
            const editBtn = document.querySelector('a.btn.btn-warning');
            const likeBtn = document.querySelector('a.btn.btn-primary');

            if (likeBtn) {
                likeBtn.addEventListener('click', (event) => likeMovie(event, movieId));
            } else if (deleteBtn) {
                deleteBtn.addEventListener('click', (event) => deleteMovie(event, movieId));
                editBtn.addEventListener('click', (event) => showEditForm(event, movieId));
            }
        } catch (err) {
            alert(err.message);
        }
    }
    else if (event.target.textContent === 'Details') {
        movieId = event.target.dataset.id;
        try {
            const response = await fetch(moviesUrl + movieId);
            if (!response.ok) {
                const error = await response.json();
                throw error
            }
            const movieData = await response.json();
            const likesCount = await getLikes(movieId)
            const isLiked = await specificUserLike(movieId, sessionStorage.getItem('id'))

            const movieDetailsSection = displayMovieDetails(movieData, likesCount, isLiked);
            document.getElementById('container').replaceChildren(views.navigation);
            document.getElementById('container').appendChild(movieDetailsSection);
            document.getElementById('container').appendChild(views.footer);
        } catch (err) {
            alert(err.message)
        }

        const deleteBtn = document.querySelector('a.btn.btn-danger');
        const editBtn = document.querySelector('a.btn.btn-warning');
        const likeBtn = document.querySelector('a.btn.btn-primary');

        if (likeBtn) {
            likeBtn.addEventListener('click', (event) => likeMovie(event, movieId));
        } else if (deleteBtn) {
            deleteBtn.addEventListener('click', (event) => deleteMovie(event, movieId));
            editBtn.addEventListener('click', (event) => showEditForm(event, movieId));
        }
    }
}

function displayMovieDetails(movie, likesCount, isLiked) {
    const section = document.createElement('section');
    section.id = 'movie-example';
    section.classList.add('view-section');
    section.innerHTML = `
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src="${movie.img}"
                alt="Movie" />
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3">Movie Description</h3>
                <p>
                    ${movie.description}
                </p>
                ${movie._ownerId === sessionStorage.getItem('id') ? '<a class="btn btn-danger" href="#" >Delete</a> <a class="btn btn-warning" href="#">Edit</a>' : '<a class="btn btn-primary" href="#">Like</a>'}
                <span hidden class="enrolled-span">Liked ${likesCount}</span>
            </div>
        </div>
    </div>
    `
    if (isLiked.length > 0) {
        section.querySelector('a.btn.btn-primary').style.display = 'none';
        section.querySelector('span').removeAttribute('hidden')
    }
    return section;
}

async function deleteMovie(event, id) {
    try {
        const response = await fetch(moviesUrl + id, {
            method: 'DELETE',
            headers: {
                'X-Authorization': sessionStorage.getItem('accessToken')
            }
        })
        if (!response.ok) {
            const error = await response.json();
            throw error
        }
        showHome()
    } catch (err) {
        alert(err.message)
    }
}