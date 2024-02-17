async function requster(method, url, data) {
    const options = {
        method,
        headers: {}
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data)
    }


    try {
        const res = await fetch(url, options)
        if (!res.ok) {
            const error = await res.json();
            throw error
        }

        return res.json();

    } catch (err) {
        alert(err.message);
        throw err
    }
}



const get = requster.bind(null, 'get');
const post = requster.bind(null, 'post');
const put = requster.bind(null, 'put');
const del = requster.bind(null, 'delete');


export {
    get,
    post,
    put,
    del
}