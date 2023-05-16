function sumOfNumbers(input){
    let startNumber = Number(input[0]);
    let finishNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;

    for (let i = startNumber; i <= finishNumber; i++){
        for (let j = startNumber; j <= finishNumber; j++){
            counter++;
            if (i + j === magicNumber){
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                return;
            
            }
        }
    }
    console.log(`${counter} combinations - neither equals ${magicNumber}`);

}

sumOfNumbers(["23",

"24",

"20"])