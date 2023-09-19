function storeCatalogue(arr) {

    const list = {}
    arr.forEach(element => {
        const [product, price] = element.split(' : ');

        list[product] = Number(price);
    });
    let char;
    Object.keys(list)
        .sort((a, b) => a.localeCompare(b))
        .forEach(product => {
            if (char !== product[0]) {
                char = product[0]
                console.log(char);
            }
            console.log(`  ${product}: ${list[product]}`);
        })
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])