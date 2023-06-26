function storage(data) {

    let myStorage = new Map();

    for (let line of data) {
        let [product, quant] = line.split(' ');
        quant = Number(quant);

        if (myStorage.has(product)) {
           let existing =  myStorage.get(product);
           existing += quant;
           myStorage.set(product, existing)
        } else {
            myStorage.set(product, quant)
        }
    }
    

    for(let [product, quant] of myStorage) {
        console.log(`${product} -> ${quant}`);
    }
}

storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])