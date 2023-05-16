function trainTheTrains(input) {
    let juryCount = Number(input[0]);
    let index = 1;
    let command = input[index];
    let presentationCount = 0;
    

    let finalAverage = 0;

    while (command !== 'Finish') {
        let projectName = input[index]
        index++;
        let currentAverage = 0;

        for (let i = 1; i <= juryCount; i++) {
            let curGrade = Number(input[index]);
            index++;
            currentAverage += curGrade;
        }
        command = input[index];
        presentationCount++;
        let average = currentAverage / juryCount
        finalAverage += average
        console.log(`${projectName} - ${average.toFixed(2)}.`);
        

    }

    let finalPrint = finalAverage / presentationCount;
    console.log(`Student's final assessment is ${finalPrint.toFixed(2)}.`);


}

trainTheTrains(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])