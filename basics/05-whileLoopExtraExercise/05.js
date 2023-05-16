function num(input){
    let length = Number(input[0]);
    let sum = 0;

    for (let i = 1; i <= length; i++){
        let num = Number(input[i]);
        sum += num;

    }
    console.log((sum / length).toFixed(2));


}

num(['4', '3', '2', '4', '2'])