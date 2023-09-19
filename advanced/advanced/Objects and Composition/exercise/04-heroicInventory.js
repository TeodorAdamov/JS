function heroicInventory(arr) {
    //make a register to fill with heroes and items
    const register = [];

    //parse input arr and fill register with heroes
    arr.forEach(element => {
        const [name, level, ...items] = element.split(/[\/, ]+/)
        const hero = {
            name,
            level: Number(level),
            items
        }
        register.push(hero)
    });

    //return obj
    return JSON.stringify(register)
}

console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
))