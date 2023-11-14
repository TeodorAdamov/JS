import { get, post } from './api.js'

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export async function login(email, password) {
    const user = await post(endpoints.login, { email, password });

    const userData = {
        email: user.email,
        accessToken: user.accessToken,
        id: user._id
    }
    localStorage.setItem('user', JSON.stringify(userData));
}

export async function register(email, password) {
    const user = await post(endpoints.register, { email, password });
    const userData = {
        email: user.email,
        accessToken: user.accessToken,
        id: user._id
    }
    localStorage.setItem('user', JSON.stringify(userData));
}

export async function logout() {
    get(endpoints.logout)
    localStorage.clear();
}