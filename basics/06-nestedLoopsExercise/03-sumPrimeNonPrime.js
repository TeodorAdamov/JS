function sums(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;
    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'stop') {
        let curNum = Number(command);

        if (curNum < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;

        for (let devisor = 2; devisor < curNum; devisor++) {
            if (curNum % devisor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeSum += curNum
        } else {
            nonPrimeSum += curNum
        }


        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}


sums([
    "3",

    "9",

    "0",

    "7",

    "19",

    "4",

    "stop"])