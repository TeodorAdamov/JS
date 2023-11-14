import { login } from "../api/users.js";

const loginPage = document.getElementById('loginPage');

const form = loginPage.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showLogin(context) {
    context.showSection(loginPage);
    ctx = context;
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());
    if (!email || !password) {
        alert('Email or password are empty');
    }
    await login(email, password);
    form.reset();
    ctx.updateNav();
    ctx.goTo('/');
}