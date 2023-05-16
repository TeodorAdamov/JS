function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let points = Number(input[1]);
    let averagePoints = 0;
    let percentWon = 0;

    for (let i = 2; i <= tournamentsCount + 2; i++) {
        let score = input[i];
        if (score === 'W') {
            averagePoints += 2000;
            percentWon++;
        } else if (score === 'F') {
            averagePoints += 1200;
        } else if (score === 'SF') {
            averagePoints += 720;
        }
    }
     console.log(`Final points: ${points + averagePoints}`);
     console.log(`Average points: ${Math.floor(averagePoints / tournamentsCount)}`);
     console.log(`${(percentWon / tournamentsCount * 100).toFixed(2)}%`);
}

tennisRanklist(["4",

"750",

"SF",

"W",

"SF",

"W"])