import { get, post, del } from "./api.js"

const endpoints = {
    'getAll': '/data/catalog',
    'create': '/data/catalog',
    'byId': '/data/catalog/',
    my: (id) => `/data/catalog?where=_ownerId%3D%22${id}%22`
}

export async function getAllFurniture() {
    return await get(endpoints.getAll);
}

export async function getById(id) {
    return await get(endpoints.byId + id);
}

export async function getMyFurniture(id) {
    return await get(endpoints.my(id));
}

export async function createNewFurniture(furniture) {
    await post(endpoints.create, furniture);
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
