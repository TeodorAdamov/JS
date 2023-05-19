function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelm = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmor = 0;
    let lostCount = 0;


    for (let i = 1; i <= lostFights; i++) {
        let brokeInSameFight = 0;
        lostCount++;

        if (lostCount % 2 === 0) {
            brokenHelm++;
            brokeInSameFight++;
        }
        if (lostCount % 3 === 0) {
            brokenSword++;
            brokeInSameFight++;
        }
        if (brokeInSameFight === 2) {
            brokenShield++;
            if (brokenShield % 2 === 0) {
                brokenArmor++;
            }
        }
    }
    
    let expenses = (brokenHelm * helmetPrice) + (brokenSword * swordPrice) + (brokenShield * shieldPrice) + (brokenArmor * armorPrice)
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiator(23,
    12.50,
    21.50,
    40,
    200)