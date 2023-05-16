
function sumNumbers(input){
    let number = Number(input[0]);
    let sum = 0;
    let index = 1;

    while (sum < number) {
        let currentNumber = Number(input[index]);
        index++;
        sum += currentNumber;
        if (sum === number){
            break;
        }

    }
    console.log(sum);

}

sumNumbers(["100", "10", "20", "30", "40"])