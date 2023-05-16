function multiplyBy2 (input){
    let index = 0;
    while(true){
        let number = Number(input[index]);
        if (number < 0){
            console.log('Negative number!');
            break;
        }
        console.log(`Result: ${(number * 2).toFixed(2)}`);
        index++;
    }

}   

multiplyBy2(['12', '43.2144', '12.3', '543.23', '-20', '23.43', '12.3245']);