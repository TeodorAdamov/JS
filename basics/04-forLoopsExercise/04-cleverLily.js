function cleverLily(input){
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let moneyCollected = 0;
    let birthdayMoney = 10;

    for (let i = 1; i <= age; i++){
        if ( i % 2 === 0){
            moneyCollected += birthdayMoney - 1;
            birthdayMoney += 10;
        } else {
            moneyCollected += toyPrice;
        }
    }

    if (moneyCollected >= washerPrice){
        let moneyLeft = Math.abs(moneyCollected - washerPrice);
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyLeft = Math.abs(moneyCollected - washerPrice);
        console.log(`No! ${moneyLeft.toFixed(2)}`);
    }




}


cleverLily(["21",

"1570.98",

"3"])