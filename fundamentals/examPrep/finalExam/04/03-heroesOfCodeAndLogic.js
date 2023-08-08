function heroes(data) {

    let heroCount = Number(data.shift());
    let heroes = [];

    for (let i = 0; i < heroCount; i++) {
        let [name, hp, mp] = data.shift().split(' ');

        let hero = {
            name,
            hp: Number(hp),
            mp: Number(mp)
        }
        heroes.push(hero)
    }

    for (let line of data) {
        if (line === 'End') {
            break;
        }
        let [_, heroName, tokenOne, tokenTwo] = line.split(' - ')
        if (line.includes('CastSpell')) {
            let mpNeeded = Number(tokenOne);
            let spellName = tokenTwo;
            let hero = heroes.find(h => h.name === heroName);

            if (hero.mp >= mpNeeded) {
                hero.mp -= mpNeeded;
                console.log(`${hero.name} has successfully cast ${spellName} and now has ${hero.mp} MP!`);
            } else {
                console.log(`${hero.name} does not have enough MP to cast ${spellName}!`);
            }


        } else if (line.includes('TakeDamage')) {
            let damageTaken = Number(tokenOne);
            let attacker = tokenTwo;
            let hero = heroes.find(h => h.name === heroName);

            hero.hp -= damageTaken;

            if (hero.hp > 0) {
                console.log(`${hero.name} was hit for ${damageTaken} HP by ${attacker} and now has ${hero.hp} HP left!`);
            } else {
                let index = heroes.indexOf(hero)
                heroes.splice(index, 1)
                console.log(`${heroName} has been killed by ${attacker}!`);
            }
        } else if (line.includes('Recharge')) {
            let mpRegen = Number(tokenOne);
            let hero = heroes.find(h => h.name === heroName);
            let oldMp = hero.mp;

            hero.mp += mpRegen;

            if (hero.mp > 200) {
                hero.mp = 200
                mpRegen = 200 - oldMp;
            }
            console.log(`${heroName} recharged for ${mpRegen} MP!`);

        } else if (line.includes('Heal')) {
            let hpRegen = Number(tokenOne);
            let hero = heroes.find(h => h.name === heroName);
            let oldHp = hero.hp;

            hero.hp += hpRegen;

            if (hero.hp > 100) {
                hero.hp = 100
                hpRegen = 100 - oldHp;
            }
            console.log(`${heroName} healed for ${hpRegen} HP!`);
        }
    }
    heroes.forEach(hero => {
        console.log(`${hero.name}`);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`);
    })
}

heroes([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ]
    
)