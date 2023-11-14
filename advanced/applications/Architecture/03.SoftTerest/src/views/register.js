import { register } from "../api/users.js";

const registerPage = document.getElementById('registerPage');

const form = registerPage.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showRegister(context) {
    context.showSection(registerPage);
    ctx = context;
}

async function onSubmit(event) {

    event.preventDefault();
    const formData = new FormData(form);
    const { email, password, repeatPassword } = Object.fromEntries(formData.entries());
    if (!email || !password) {
        return alert('Email or password are empty');
    }
    if (password !== repeatPassword) {
        return alert('Passwords don\'t match');
    }
    await register(email, password);
    form.reset();
    ctx.updateNav();
    ctx.goTo('/');
}