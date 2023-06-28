function miner(data) {

    let myMine = new Map;

    for (let i = 0; i < data.length; i += 2) {
        let product = data[i];
        let quantity = Number(data[i + 1]);

        if (myMine.has(product)) {
            let value = myMine.get(product);
            let newValue = quantity + value;
            myMine.set(product, newValue)
        } else {
            myMine.set(product, quantity)
        }

    }

    for (let product of myMine) {
        console.log(`${product[0]} -> ${product[1]}`);
    }
}

miner([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])