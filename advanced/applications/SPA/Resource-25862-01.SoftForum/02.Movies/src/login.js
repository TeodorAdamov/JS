import { views } from "./views.js"
import { showHome } from "./home.js"
import { navBar } from "./nav.js"

const loginUrl = 'http://localhost:3030/users/login'
const form = views.loginSection.querySelector('form')
form.addEventListener('submit', onLogin);


export function showLogin() {
    document.getElementById('container').replaceChildren(views.navigation)
    document.getElementById('container').appendChild(views.loginSection)
    document.getElementById('container').appendChild(views.footer)
}



async function onLogin(event) {
    event.preventDefault();
    const formData = new FormData(form)
    const { email, password} = Object.fromEntries(formData.entries());
    if (!email || !password) {
        return alert('All fields required!');
    }

    try {
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        if (!response.ok) {
            const error = await response.json();
            throw error;
        }

        const userData = await response.json()

        sessionStorage.setItem('email', userData.email)
        sessionStorage.setItem('id', userData._id)
        sessionStorage.setItem('accessToken', userData.accessToken)
    } catch (err) {
        alert(err.message)
    }
    showHome()
    navBar()
}