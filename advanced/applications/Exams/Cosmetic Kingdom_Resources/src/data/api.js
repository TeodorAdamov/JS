import { clearUserData, getUserData } from "../util.js"



const host = 'http://localhost:3030'

async function requester(method, path, data) {
    const options = {
        method,
        headers: {}
    }

    const userData = getUserData();

    if (userData) {
        options.headers['X-authorization'] = userData.accessToken
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    try {
        const res = await fetch(host + path, options);
        if (!res.ok) {
            if (res.status == 403) {
                clearUserData();
            }
            const error = await res.json();
            throw error
        }

        if (res.status == 204) {
            return res
        } else {
            return res.json();
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}


const get = requester.bind(null, 'get');
const post = requester.bind(null, 'post');
const put = requester.bind(null, 'put');
const del = requester.bind(null, 'delete');


export {
    get,
    post,
    put,
    del
}