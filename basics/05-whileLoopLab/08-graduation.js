function graduation(input){
    let name = input[0];
    let currentGrade = 0;
    let index = 1;
    let averageGrade = 0;

    while (index < input.length) {
        currentGrade = Number(input[index])
        if (currentGrade >= 4){
            averageGrade += currentGrade;
        } else {
            console.log(`${name} has been excluded at ${index} grade`);
            return;
        }
        index++;

    }
    console.log(`${name} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`)
    




}

graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])