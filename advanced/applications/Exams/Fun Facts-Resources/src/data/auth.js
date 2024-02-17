import { clearUserData, setUserData, } from "../util.js";
import { post, get } from "./api.js";

const endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout'
}

export async function login(email, password) {
    if (!email || !password) {
        throw new Error('All fields required');
    }
    const userData = await post(endpoints.login, { email, password });
    setUserData(userData);
}

export async function register(email, password, rePass) {
    if (!email || !password) {
        throw new Error('All fields required');
    }
    if (password !== rePass) {
        throw new Error('Passwords must match!');
    }
    const userData = await post(endpoints.register, { email, password });
    setUserData(userData);
}

export async function logout() {
    get(endpoints.logout);
    clearUserData();
}