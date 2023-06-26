function schoolRegister(data) {

    let register = []
    data.forEach(line => {
        let [name, grade, avgScore] = line.split(', ');

        let nameArray = name.split(': ');
        let gradeArray = grade.split(': ');
        let avgScoreArray = avgScore.split(': ');

        let curStudent = {
            name: nameArray[1],
            grade: Number(gradeArray[1]),
            score: Number(avgScoreArray[1])
        }
        if (curStudent.score >= 3) {
            register.push(curStudent)
        }
    });

    register.sort((a, b) => a.grade - b.grade)


    let nextGrade = register[0].grade
    let studentsFromCurGrade = [];
    let averageAnnualScore = 0;

    for (let student of register) {


        if (nextGrade === student.grade) {
            studentsFromCurGrade.push(student.name);
            averageAnnualScore += student.score
        } else if (nextGrade !== student.grade) {
            console.log(`${nextGrade + 1} Grade`);
            console.log(`List of students: ${studentsFromCurGrade.join(', ')}`);
            console.log(`Average annual score from last year: ${(averageAnnualScore / studentsFromCurGrade.length).toFixed(2)}\n`);
            
            nextGrade = student.grade;
            studentsFromCurGrade = [];
            averageAnnualScore = 0;
            studentsFromCurGrade.push(student.name);
            averageAnnualScore += student.score
        }
    }
    console.log(`${nextGrade + 1} Grade`);
    console.log(`List of students: ${studentsFromCurGrade.join(', ')}`);
    console.log(`Average annual score from last year: ${(averageAnnualScore / studentsFromCurGrade.length).toFixed(2)}`);
}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"])