function bitcoinMine(input) {


    let oneGrOfGold = 67.51;
    let oneBitcoin = 11949.16;
    let totalBitcoins = 0;
    let totalLv = 0;
    let dayOfFirstBitcon = '';
    let days = input.length

    for (let i = 1; i <= days; i++) {
        let currentDay = input.shift();
        if (i % 3 === 0) {
            currentDay *= 0.7;
        }
        let lvPerDay = (currentDay * oneGrOfGold);
        totalLv += lvPerDay;

        while (totalLv >= oneBitcoin) {
            if (totalBitcoins == 0) {
                dayOfFirstBitcon = i
            }
            totalLv -= oneBitcoin;
            totalBitcoins++;

        }

    }

    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcon}`);
    }
    console.log(`Left money: ${totalLv.toFixed(2)} lv.`);

}


bitcoinMine([3124.15, 504.212, 2511.124])