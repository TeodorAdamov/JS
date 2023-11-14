import { showLogin } from "./login.js";
import { navBar } from "./nav.js";

const logoutUrl = 'http://localhost:3030/users/logout'

export async function onLogout() {
    const accessToken = sessionStorage.getItem('accessToken');

    await fetch(logoutUrl, {
        method: 'GET',
        headers: {
            'X-authorization': accessToken
        }
    })
    sessionStorage.clear()
    showLogin()
    navBar()
}