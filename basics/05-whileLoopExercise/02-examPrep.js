function examPrep(input) {
    let badGrade = Number(input[0]);
    let averageScore = 0;
    let problemsCount = 0;
    let badGradesCount = 0;
    let currentProblem = input[1];
    let currentGrade = Number(input[2]);
    let index = 3;
    let lastProblem = '';

    while (currentProblem !== 'Enough') {
        if (currentGrade <= 4) {
            badGradesCount++;
            if (badGradesCount === badGrade) {
                console.log(`You need a break, ${badGradesCount} poor grades.`);
                return;
            }
        }

        problemsCount++;
        averageScore += currentGrade;
        currentProblem = input[index];
        currentGrade = Number(input[index + 1]);
        index += 2;
        if (currentProblem !== 'Enough') {
            lastProblem = currentProblem
        }
    }

    console.log(`Average score: ${(averageScore / problemsCount).toFixed(2)}`);
    console.log(`Number of problems: ${problemsCount}`);
    console.log(`Last problem: ${lastProblem}`);




}

examPrep(["2",

"Income",

"3",

"GameInfo",

"6",

"BestPlayer",

"4"])
