function projectCreation(input){
    let architectName = input[0];
    let projectsNeeded = input[1];
    let hoursNeeded = projectsNeeded * Number(3);
    console.log(`The architect ${architectName} will need ${hoursNeeded} hours to complete ${projectsNeeded} project/s.`);

}

projectCreation(["George", "427"]);