function balance(input) {
    let index = 1;
    let sum = 0;
    let income = input[0];

    while (income !== "NoMoreMoney") {
        let deposit = Number(income)

        if (income < 0) {
            console.log('Invalid operation!');
            break;
        }
        console.log(`Increase: ${deposit.toFixed(2)}`);

        sum += deposit
        income = (input[index]);
        index++;


    }
    console.log(`Total: ${sum.toFixed(2)}`);

}

balance([
    "5.51",

    "69.42",

    "100",

    "NoMoreMoney"])