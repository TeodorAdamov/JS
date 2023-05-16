function numbersFrom1ToN(input){
    let num = Number(input[0]);

    for (let i = 1; i <= num; i+= 3){
        console.log(i);
    }

}

numbersFrom1ToN(['15']);