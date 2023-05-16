function bonusPoints(input) {
    let entryNumber = Number(input[0]);
    let bonus = 0;

    if (entryNumber <= 100) {
        bonus = 5;
    } else if (entryNumber < 1000) {
        bonus = entryNumber * 0.2;
    } else {
        bonus = entryNumber * 0.1;
    }

    if (entryNumber % 2 === 0) {
        bonus = bonus + 1;          //bonus += 1; its the same
    } else if (entryNumber % 10 === 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(bonus + entryNumber);

}

bonusPoints(["175"]);