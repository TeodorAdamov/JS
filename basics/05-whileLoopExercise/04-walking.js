function walking(input) {
    const goal = 10000;
    let entry = input[0];
    let index = 1;
    let steps = 0;


    while (index <= input.length) {
        if (entry !== 'Going home') {
            steps += Number(entry);
        } else if (entry === 'Going home') {
            steps += Number(input[index]);
            break;
        }
        entry = input[index];
        index++;

    }

    if (steps >= goal) {
        let stepsOverGoal = steps - goal;
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsOverGoal} steps over the goal!`);
    } else {
        let stepsNeeded = goal - steps;
        console.log(`${stepsNeeded} more steps to reach goal.`);
    }
}








walking(["125", "250", "4000", "30", "2678", "4682"])