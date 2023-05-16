function gameOfIntervals(input){
    let gamesCount = Number(input[0]);
    let result = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let invalidNumbers = 0;

    for (let i = 1; i <= gamesCount; i++){
        let eachGamePoints = Number(input[i]);

        if (eachGamePoints < 0 || eachGamePoints > 50){
            result /= 2;
            invalidNumbers++;
        } else if (eachGamePoints >= 0 && eachGamePoints <= 9){
            result += 0.2 * eachGamePoints;
            p1++;
        } else if (eachGamePoints >= 10 && eachGamePoints <= 19){
            result += 0.3 * eachGamePoints;
            p2++;
        } else if (eachGamePoints >= 20 && eachGamePoints <= 29){
            result += 0.4 * eachGamePoints;
            p3++;
        } else if (eachGamePoints >= 30 && eachGamePoints <= 39){
            result += 50;
            p4++;
        } else if (eachGamePoints >= 40 && eachGamePoints <= 50){
            result += 100;
            p5++;
        }
    }
    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${(p1 / gamesCount * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(p2 / gamesCount * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(p3 / gamesCount * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(p4 / gamesCount * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(p5 / gamesCount * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidNumbers / gamesCount * 100).toFixed(2)}%`);

}

gameOfIntervals(['10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20']);