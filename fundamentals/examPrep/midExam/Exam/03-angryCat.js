function angryCat(houseItems, entryPoint, value) {

    let leftDamage = 0;
    let rightDamage = 0;

    if (value === 'cheap') {
        for (let i = 0; i < entryPoint; i++) {
            if (houseItems[i] < houseItems[entryPoint]) {
                leftDamage += houseItems[i];
            }
        }
        for (let i = houseItems.length - 1; i > entryPoint; i--) {
            if (houseItems[i] < houseItems[entryPoint]) {
                rightDamage += houseItems[i];
            }
        }
    } else {
        for (let i = 0; i < entryPoint; i++) {
            if (houseItems[i] >= houseItems[entryPoint]) {
                leftDamage += houseItems[i];
            }
        }
        for (let i = houseItems.length - 1; i > entryPoint; i--) {
            if (houseItems[i] >= houseItems[entryPoint]) {
                rightDamage += houseItems[i];
            }
        }
    }

    if (leftDamage >= rightDamage) {
        console.log(`Left - ${leftDamage}`);
    } else if (rightDamage > leftDamage) {
        console.log(`Right - ${rightDamage}`);
    }

}

angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive")