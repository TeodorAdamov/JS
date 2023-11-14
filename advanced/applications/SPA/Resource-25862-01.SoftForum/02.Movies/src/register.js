import { views } from "./views.js"
import { showHome } from "./home.js"
import { navBar } from "./nav.js"


const form = views.registerSection.querySelector('form')
const registerUrl = 'http://localhost:3030/users/register'
form.addEventListener('submit', onRegister)

export function showRegister() {
    document.getElementById('container').replaceChildren(views.navigation)
    document.getElementById('container').appendChild(views.registerSection)
    document.getElementById('container').appendChild(views.footer)
}

async function onRegister(event) {
    event.preventDefault();
    const formData = new FormData(form)
    const { email, password, repeatPassword } = Object.fromEntries(formData.entries());
    if (!email || !password) {
        return alert('All fields required!');
    }
    if (password.length < 6) {
        return alert('Password must be atleast 6 characters long!');
    }
    if (password !== repeatPassword) {
        return alert('Passwords don\'t match!')
    }

    try {
        const response = await fetch(registerUrl, {
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


