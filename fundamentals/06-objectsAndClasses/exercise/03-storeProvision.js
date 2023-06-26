function storeProvision(stock, productsOrdered) {

    let obj = {};
    let productsInStock = addProduct(stock, obj);
    let orderList = addProduct(productsOrdered, productsInStock)

    function addProduct(productsArray, obj) {
        while (productsArray.length > 0) {
            let [name, quantity] = [productsArray.shift(), Number(productsArray.shift())];

            if (obj.hasOwnProperty(name)) {
                obj[name] += quantity;
            } else {
                obj[name] = Number(quantity);
            }
        }
        return obj;
    }

    // for (let product in orderList) {
    //     console.log(`${product} -> ${orderList[product]}`);
    // }

    Object.entries(orderList).forEach(el => console.log(`${el[0]} -> ${el[1]}`));
}

storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas',
        '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ])