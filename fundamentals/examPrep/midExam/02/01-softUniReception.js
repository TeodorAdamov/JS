function softUni(data) {
    let employeeOne = Number(data[0]);
    let employeeTwo = Number(data[1]);
    let employeeThree = Number(data[2]);
    let studentsCount = Number(data[3]);

    let totalStudetsPerHour = employeeOne + employeeTwo + employeeThree;
    let hours = 0;

    while(studentsCount > 0) {
        studentsCount -= totalStudetsPerHour;
        hours++;

        if(hours % 4 === 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);

}

softUni(['5','6','4','20'])