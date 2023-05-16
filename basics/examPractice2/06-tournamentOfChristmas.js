function tournament(input) {
    let daysCount = Number(input[0])
    let moneyRaisedPerDay = 0;
    let totalRaisedMoney = 0;
    let winningDays = 0;
    let losingDays = 0;
    let index = 1;

    for (let i = 1; i <= daysCount; i++) {
        let winsCount = 0;
        let lostCount = 0;
        moneyRaisedPerDay = 0;
        let command = input[index];
        index++;
        while (command !== 'Finish') {
            let result = input[index];
            index++;
            command = input[index];
            index++;
            if (result === 'win') {
                winsCount++;
                moneyRaisedPerDay += 20;
            } else {
                lostCount++;
            }

        }

        if (winsCount > lostCount){
            moneyRaisedPerDay *= 1.1;
            totalRaisedMoney += moneyRaisedPerDay;
            winningDays++;
        } else {
            losingDays++;
            totalRaisedMoney += moneyRaisedPerDay;
        }



    }

    if (winningDays > losingDays){
        totalRaisedMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalRaisedMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalRaisedMoney.toFixed(2)}`);
    }









}

tournament([
    '2',
    'volleyball',
    'win',
    'football',
    'lose',
    'basketball',
    'win',
    'Finish',
    'golf',
    'win',
    'tennis',
    'win',
    'badminton',
    'win',
    'Finish',
])