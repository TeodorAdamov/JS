import { get, post, del, put } from "./api.js"

const endpoints = {
    'getAll': '/data/fruits?sortBy=_createdOn%20desc',
    'create': '/data/fruits',
    'byId': '/data/fruits/',
    'search': '/data/fruits?where='
}

export async function getAllProducts() {
    return await get(endpoints.getAll);
}

export async function getById(id) {
    return await get(endpoints.byId + id);
}

export async function searchByQuery(query) {
    return await get(endpoints.search + query);
}


export async function createNewProduct(data) {
    await post(endpoints.create, data);
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
