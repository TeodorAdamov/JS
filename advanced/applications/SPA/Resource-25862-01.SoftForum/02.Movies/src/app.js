import { views } from "./views.js"
import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { onLogout } from "./logout.js";
import { navBar } from "./nav.js";
import { showRegister } from "./register.js";
import { showAddMovieSection } from "./addMovie.js";
import { movieDetails } from "./details.js";
import { onEdit } from "./edit.js";


document.getElementById('container').innerHTML = '';



showHome()



document.querySelector('li:nth-child(3) a').addEventListener('click', showLogin);
document.querySelector('.navbar-brand').addEventListener('click', showHome);
document.querySelector('li:nth-child(4) a').addEventListener('click', showRegister);
document.querySelector('li:nth-child(2) a').addEventListener('click', onLogout);
views.homeSection.querySelector('#add-movie-button').addEventListener('click', showAddMovieSection);
views.homeSection.querySelector('#movie ul').addEventListener('click', movieDetails);
views.editMovie.querySelector('form').addEventListener('submit', onEdit);
window.addEventListener('DOMContentLoaded', navBar);