function heartDelivery(data) {
    let houses = data.shift()
        .split("@")
        .map(Number);

    let commandArray = data.shift().split(" ");
    let command = commandArray[0];
    let jumpLength = Number(commandArray[1]);
    let lastPosition = 0;
    let index = jumpLength;
    while (command !== 'Love!') {
        while (true) {
            if (index >= houses.length || index < 0) {
                index = 0;
                lastPosition = index;
                if (houses[index] > 0) {
                    houses[index] -= 2;
                    lastPosition = index;
                    if (houses[index] === 0) {
                        console.log(`Place ${index} has Valentine's day.`);
                        lastPosition = index;
                        break;
                    }
                    lastPosition = index;
                    break;
                } else if (houses[index] === 0) {
                    lastPosition = index;
                    console.log(`Place ${index} already had Valentine's day.`);
                }

                break;
            } else if (houses[index] > 0) {
                houses[index] -= 2;
                lastPosition = index;
                if (houses[index] === 0) {
                    console.log(`Place ${index} has Valentine's day.`);
                    lastPosition = index;
                    break;
                }
                lastPosition = index;
                break;
            }

            if (houses[index] === 0) {
                lastPosition = index;
                console.log(`Place ${index} already had Valentine's day.`);
                break;
            }


            if (jumpLength >= houses.length || jumpLength < 0) {
                break;
            }
            

        }


        commandArray = data.shift().split(" ");
        command = commandArray[0];
        jumpLength = Number(commandArray[1]);
        index += jumpLength;
    }

    console.log(`Cupid's last position was ${lastPosition}.`);
    let sum = 0;
    let failedPlaces = 0;
    for (let el of houses) {
        sum += el
        if (el > 0) {
            failedPlaces++;
        }
    }

    if (sum === 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${failedPlaces} places.`);
    }
}

heartDelivery(["4@2@4@2",
"Jump 1",
"Jump 2",
"Jump 1",
"Jump 2",
"Jump 2",
"Jump 2",
"Love!"])
