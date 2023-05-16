function vacation(input) {
    let vacationPrice = Number(input[0]);
    let money = Number(input[1]);
    let daysSpending = 0;
    let saveOrSpend = input[2];
    let moneySavedOrSpent = Number(input[3]);
    let index = 4
    let daysPassed = 1;

    while (index <= input.length) {

        if (saveOrSpend === 'save') {
            money += moneySavedOrSpent;
            daysSpending = 0;
        } else if (saveOrSpend === 'spend') {
            money -= moneySavedOrSpent;
            daysSpending++;
            if (money < 0) {
                money = 0;
            }
        }

        if (daysSpending >= 5) {
            console.log("You can't save the money.");
            console.log(daysPassed);
            break;
        } else if (money >= vacationPrice) {
            console.log(`You saved the money for ${daysPassed} days.`);
            break;
        }
        saveOrSpend = input[index];
        moneySavedOrSpent = Number(input[index + 1]);
        index += 2;
        daysPassed++;


    }




}

vacation(["250",

    "150",

    "spend",

    "50",

    "spend",

    "50",

    "save",

    "100",

    "save",

    "100"])