function train(data) {
    let wagons = data.shift().split(" ").map(Number);
    let maxCapacity = Number(data.shift());

    for (let index = 0; index < data.length; index++) {
        let commandArray = data[index].split(" ");

        if (commandArray[0] === "Add") {
            wagons.push(Number(commandArray[1]));
        } else {
            for (let i = 0; i < wagons.length; i++) {
                let curWagon = wagons[i];
                let check = curWagon + Number(data[index]);
                if (check <= maxCapacity) {
                    wagons[i] = curWagon + Number(data[index]);
                    break;
                }
            }
        }
    }

    console.log(wagons.join(" "));
}

train([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])