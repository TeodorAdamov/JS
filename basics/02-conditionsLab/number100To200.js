function numbers(input){
    let randomNumber = Number(input[0]);

    if (randomNumber < 100){
        console.log("Less than 100");
    } else if (randomNumber >= 100 && randomNumber <= 200){
        console.log("Between 100 and 200");
    } else 
        console.log("Greater than 200");
}

numbers(["5"]);