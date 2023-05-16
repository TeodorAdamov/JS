function coins(input) {
    let change = Number(input[0]);
    let coinsCount = 0;
    let index = 0;
    let coins = [200, 100, 50, 20, 10, 5, 2, 1];
    change = change * 100;

   
    while (index < coins.length){
        coinsCount += Math.floor(change / coins[index])
        change = change % coins[index];
        index++;
    }

    console.log(coinsCount);
}

coins(["2.73"])