function travel(input) {
    let destination = input[0]
    let sumNeeded = Number(input[1])
    let index = 2;
    let sumCollected = 0;


    while (destination !== 'End'){
        while (sumCollected < sumNeeded){
            sumCollected += Number(input[index])
            index++;
            if (sumCollected >= sumNeeded){
                console.log(`Going to ${destination}!`);
                sumCollected = 0;
                break;
            }
        }

        destination = input[index];
        index++;
        sumNeeded = input[index];
        index++
       
    }

}

travel(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])