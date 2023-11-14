import { views } from "./views.js"
const moviesUrl = 'http://localhost:3030/data/movies/'

export function showHome() {
    document.getElementById('container').replaceChildren(views.navigation)
    document.getElementById('container').appendChild(views.homeSection)
    document.getElementById('container').appendChild(views.footer)
    if (sessionStorage.getItem('accessToken')) {
        document.getElementById('add-movie-button').style.display = 'block';
    } else {
        document.getElementById('add-movie-button').style.display = 'none';
    }
    displayMovies();
}

async function displayMovies() {
    try {
        const response = await fetch(moviesUrl);
        if (!response.ok) {
            const error = await response.json();
            throw error
        }
        const movieData = await response.json();
        const moviesUl = document.querySelector('#movie ul');
        moviesUl.innerHTML = '';
        movieData.forEach(movie => moviesUl.appendChild(movieHTML(movie)))

    } catch (err) {
        alert(err.message)
    }
}

function movieHTML(movie) {
    const li = document.createElement('li')
    li.classList.add('card');
    li.classList.add('mb-4');
    li.innerHTML = `
    <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400" />
    <div class="card-body">
      <h4 class="card-title"> ${movie.title}</h4>
      <a href="#">
        <button  data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
      </a>
    </div>
    <div class="card-footer">
    </div>
    `

    return li;
}

