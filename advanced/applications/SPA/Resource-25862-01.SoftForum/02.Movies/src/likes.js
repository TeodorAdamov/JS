import { movieDetailsPage } from "./details.js";
const likesUrl = 'http://localhost:3030/data/likes?where=movieId%3D%22{movieId}%22&distinct=_ownerId&count'
const specificLikeUrl = 'http://localhost:3030/data/likes?where=movieId%3D%22{movieId}%22%20and%20_ownerId%3D%22{userId}%22 '


export async function likeMovie(event, id) {
    try {
        const response = await fetch(likesUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-authorization': sessionStorage.getItem('accessToken'),
            },
            body: JSON.stringify({ movieId: id })
        })
        if (!response.ok) {
            const error = await response.json();
            throw error
        }
        const data = await response.json();
        
    } catch (err) {
        alert(err.message)
    }
    movieDetailsPage('', id)
}


export async function getLikes(movieId) {
    try {
        const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`)
        if (!response.ok) {
            const error = await response.json();
            throw error
        }
        const data = await response.json();
        return data
    } catch (err) {
        alert(err.message)
    }
}

export async function specificUserLike(movieId, userId) {
    try {
        const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`)
        if (!response.ok) {
            const error = await response.json();
            throw error
        }
        const data = await response.json();
        return data
    } catch (err) {
        alert(err.message)
    }
}