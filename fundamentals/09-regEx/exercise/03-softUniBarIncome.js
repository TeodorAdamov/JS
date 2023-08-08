function softuniBar(data) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^\|\$\%\.]*<(?<product>\w+)>[^\|\$\%\.]*\|(?<quantity>\d+)\|[^\|\$\%\.]*?(?<price>\d+\.?\d+)\$/
    let totalPrice = 0;
    for (let line of data) {
        if (line === 'end of shift') {
            break;
        }
        let match = pattern.exec(line);


        if (match !== null) {
            let price = Number(match.groups.quantity) * Number(match.groups.price)
            console.log(`${match.groups.name}: ${match.groups.product} - ${price.toFixed(2)}`);
            totalPrice += price
        }
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}

softuniBar(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'])