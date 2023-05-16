// От конзолата се четат 4 числа, по едно на ред:
// ⦁	Първи ред – Цена за килограм зеленчуци – реално число[0.00… 1000.00]
// ⦁	Втори ред – Цена за килограм плодове – реално число[0.00… 1000.00]
// ⦁	Трети ред – Общо килограми на зеленчуците – цяло число[0… 1000]
// ⦁	Четвърти ред – Общо килограми на плодовете – цяло число[0… 1000]

function vegetableMarket(input){
    let kgVegetablePrice = Number(input[0]);
    let kgFruitPrice = Number(input[1]);
    let totalKgVegetables = Number(input[2]);
    let totalKgFruits = Number(input[3]);

    let vegetableTotal = kgVegetablePrice * totalKgVegetables
    let fruitsTotal = kgFruitPrice * totalKgFruits
    let total = (vegetableTotal + fruitsTotal) / 1.94;
    console.log(total.toFixed(2));

}

vegetableMarket(["0.194", "19.4", "10", "10"]);