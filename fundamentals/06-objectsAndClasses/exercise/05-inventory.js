function inventory(data) {

    let heroes = [];

    for (let hero of data) {
        let [name, level, items] = hero.split(' / ');
        let tempHero = {
            name,
            level: Number(level),
            items
        };
        heroes.push(tempHero)
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let obj of heroes) {
        console.log(`Hero: ${obj.name}`)
        console.log(`level => ${obj.level}`)
        console.log(`items => ${obj.items}`)
    }
    
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])