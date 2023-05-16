function reportSystem(input) {
    let sumNeeded = Number(input.shift());
    let averageCashPaid = 0;
    let averageCardPaid = 0;
    let transactionCount = 1;
    let index = 0;
    let sumCollected = 0;
    let cardPaidCount = 0;
    let cashPaidCount = 0;

    while (input[index] !== 'End') {
        let currentPay = Number(input[index]);


        if (sumCollected >= sumNeeded) {
            console.log(`Average CS: ${(averageCashPaid / cashPaidCount).toFixed(2)}`);
            console.log(`Average CC: ${(averageCardPaid / cardPaidCount).toFixed(2)}`);
            return;
        }
        if (transactionCount % 2 !== 0) {
            transactionCount++;
            if (currentPay > 100) {
                console.log(`Error in transaction!`);
            } else {
                sumCollected += currentPay;
                averageCashPaid += currentPay;
                cashPaidCount++;
                console.log(`Product sold!`);
            }
        } else {
            transactionCount++;
            if (currentPay < 10) {
                console.log(`Error in transaction!`);
            } else {
                sumCollected += currentPay;
                averageCardPaid += currentPay;
                cardPaidCount++;
                console.log(`Product sold!`);
            }
        }
        index++;
    }
    console.log("Failed to collect required money for charity.");


}

reportSystem([
    '600',
    '86',
    '150',
    '98',
    '227',
    'End',
    ])
