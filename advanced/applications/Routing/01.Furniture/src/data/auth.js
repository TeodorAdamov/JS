import { clearUserData, setUserData, updateNav } from "../util.js";
import { post, get } from "./api.js";

const endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout'
}

export async function login(email, password) {
    const userData = await post(endpoints.login, { email, password });
    setUserData(userData);
}

export async function register(email, password, rePass) {
    if (!email || !password) {
        alert('All fields required!');
    }
    if (password !== rePass) {
        alert('Passwords must match!')
    }
    const userData = await post(endpoints.register, { email, password });
    setUserData(userData);
}

export async function logout() {
    get(endpoints.logout);
    clearUserData();
    updateNav();
}