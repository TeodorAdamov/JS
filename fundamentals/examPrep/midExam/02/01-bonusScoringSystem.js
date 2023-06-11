function bonusScoringSystem(input) {

    let studentsCount = input.shift();
    let lecturesCount = Number(input.shift());
    let additionalBonus = Number(input.shift());
    let maxBonus = 0;
    let maxAttendance = 0;
    

    for (let i = 0; i < input.length; i++) {
        let bonus = Number(input[i]) / lecturesCount * (5 + additionalBonus);

        if(bonus > maxBonus) {
            maxBonus = bonus;
            maxAttendance = Number(input[i])
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);

}

bonusScoringSystem([
    '5',
    '25',
    '30',
    '12',
    '19',
    '24',
    '16',
    '20'
])
