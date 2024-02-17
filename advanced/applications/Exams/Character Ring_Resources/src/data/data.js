import { get, post, del, put } from "./api.js"

const endpoints = {
    'getAll': '/data/characters?sortBy=_createdOn%20desc',
    'create': '/data/characters',
    'byId': '/data/characters/',
    'useful': '/data/useful',
    totalLikes: (id) => `/data/useful?where=characterId%3D%22${id}%22&distinct=_ownerId&count`,
    hasLiked: (characterId, userId) => `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function getAllProducts() {
    return await get(endpoints.getAll);
}

export async function getById(id) {
    return await get(endpoints.byId + id);
}

export async function totalLikes(id) {
    return await get(endpoints.totalLikes(id));
}

export async function hasLiked(characterId, userId) {
    return await get(endpoints.hasLiked(characterId, userId))
}

export async function createNewProduct(data) {
    await post(endpoints.create, data);
}

export async function likeCharacter(data) {
    await post(endpoints.useful, data)
}


export async function editById(id, data) {
    await put(endpoints.byId + id, data)
}

export async function delById(id) {
    del(endpoints.byId + id);
}












// •	Create Furniture (POST): http://localhost:3030/data/catalog
// •	All Furniture (GET): http://localhost:3030/data/catalog
// •	Furniture Details (GET): http://localhost:3030/data/catalog/:id
// •	Update Furniture (PUT): http://localhost:3030/data/catalog/:id
// •	Delete Furniture (DELETE):  http://localhost:3030/data/catalog/:id
// •	My Furniture (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22
