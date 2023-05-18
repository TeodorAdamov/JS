function specialNumbers(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++){
        let numAsStr = i.toString()
        for (let j = 0; j < numAsStr.length; j++){
            sum += Number(numAsStr[j])
        }
        if (sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        sum = 0;
        
    }

}

specialNumbers(15)