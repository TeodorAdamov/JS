function lowestPricesInCities(arr) {

    const products = [];

    arr.forEach(element => {
        const [town, name, price] = element.split(' | ');
        const isProductExisting = products.find(el => name === el.name);

        if (!isProductExisting) {
            const productObj = {
                name,
                price: Number(price),
                town,
            }
            products.push(productObj)
        } else {
            if (isProductExisting.price > price) {
                isProductExisting.price = price;
                isProductExisting.town = town;
            }
        }
    });
    products.forEach(product => {
        console.log(`${product.name} -> ${product.price} (${product.town})`);
    })
}

lowestPricesInCities([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'
])