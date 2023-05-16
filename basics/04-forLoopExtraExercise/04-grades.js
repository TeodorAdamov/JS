function grades(input){
    let studentsCount = Number(input[0]);
    let fails = 0;
    let below4 = 0;
    let below5 = 0;
    let topStudents = 0;
    let averageGrade = 0;
    
    for(let i = 1; i <= studentsCount; i++){
        let currentGrade = Number(input[i]);
        averageGrade += currentGrade;

        if (currentGrade <= 2.99){
            fails++;
        } else if (currentGrade <= 3.99){
            below4++;
        } else if (currentGrade <= 4.99){
            below5++;
        } else {
            topStudents++;
        }       
    }
    
    console.log(`Top students: ${(topStudents / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(below5 / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(below4 / studentsCount * 100).toFixed(2)}%`);
    console.log(`Fail: ${(fails / studentsCount * 100).toFixed(2)}%`);
    console.log(`Average: ${(averageGrade / studentsCount).toFixed(2)}`);

}

grades(['10', '3.00', '2.99', '5.68', '3.01', '4', '6.00', '4.50', '2.44', '5'])