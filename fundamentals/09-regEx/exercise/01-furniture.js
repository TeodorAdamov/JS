function furniture(data) {

    let pattern = />>(?<name>[A-Z]+[a-z]*)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)\b/
    let boughtFurniture = [];

    for (let line of data) {
        if (line === 'Purchase') {
            break;
        }
        let match = pattern.exec(line)

        if (match !== null) {
            let furniture = {
                name: match.groups.name,
                price: Number(match.groups.price) * Number(match.groups.quantity) 
            }
            boughtFurniture.push(furniture)
        }
    }

    let totalPrice = 0;
    console.log("Bought furniture:");

    boughtFurniture.forEach(item => {
        console.log(item.name);
        totalPrice += item.price
    })
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']

)