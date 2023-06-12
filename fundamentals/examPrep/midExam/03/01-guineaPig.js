function pig(input) {
    let inputAsNum = input.map(Number);
    let foodQuant = inputAsNum[0] * 1000;
    let hayQuant = inputAsNum[1] * 1000;
    let coverQuant = inputAsNum[2] * 1000;
    let pigWeight = inputAsNum[3] * 1000;


    for (let i = 1; i <= 30; i++) {
        foodQuant -= 300;

        if(i % 2 === 0) {
            hayQuant -= foodQuant * 0.05
        }
        if (i % 3 === 0) { 
            coverQuant -= 1 / 3 * pigWeight
        }

        if (foodQuant < 0) {
            return "Merry must go to the pet store!";
        } else if (hayQuant < 0) {
            return "Merry must go to the pet store!";
        } else if (coverQuant < 0) {
            return "Merry must go to the pet store!";
        }
    }
    let foodLeft = foodQuant / 1000;
    let hayLeft = hayQuant / 1000;
    let coverLeft = coverQuant / 1000;
    console.log(`Everything is fine! Puppy is happy! Food: ${foodLeft.toFixed(2)}, Hay: ${hayLeft.toFixed(2)}, Cover: ${coverLeft.toFixed(2)}.`);

}

pig(["10", "5", "5.2", "1"])