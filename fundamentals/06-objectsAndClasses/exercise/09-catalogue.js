function catalogue(data) {

    let myProducts = [];

    for (let line of data) {
        let [product, price] = line.split(' : ');
        let tempProduct = {
            name: product,
            price: Number(price)
        }
        myProducts.push(tempProduct);
    }

    myProducts.sort((a, b) => a.name.localeCompare(b.name));

    let letter = '';
    for (let product of myProducts) {
        if (product.name[0] === letter) {
            console.log(`  ${product.name}: ${product.price}`);
        } else {
            letter = product.name[0];
            console.log(letter);
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)