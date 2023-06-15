function theLift(data) {
    let peopleCount = Number(data[0]);
    let lift = data[1].split(' ').map(Number)
    let index = 0;


    while (peopleCount > 0) {
        if (lift[index] < 4) {
            lift[index] += 1;
            peopleCount--;
        } else if (lift[index] === 4 && index < lift.length) {
            index++;
        } else {
            console.log(`There isn't enough space! ${peopleCount} people in a queue!`);
            console.log(lift.join(' '));
            return;
        }
    }
    let isFull = true;
    for(let wagon of lift) {
        if (wagon !== 4){
            isFull = false;
        }
    }
    if (peopleCount === 0 && !isFull) {
        console.log('The lift has empty spots!');
        console.log(lift.join(' '));
    } else {
        console.log(lift.join(' '));
    }
}

theLift([
    "15",
    "0 0 0 0 4"
]
)