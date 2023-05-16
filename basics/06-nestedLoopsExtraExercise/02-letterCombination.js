function letters(input){
    let startLetter = input[0].charCodeAt(0);
    let endLetter = input[1].charCodeAt(0);
    let skip = input[2].charCodeAt(0);
    let result = '';
    let counter = 0;

    for (let i = startLetter; i <= endLetter; i++){
        for (let j = startLetter; j <= endLetter; j++){
            for (let k = startLetter; k <= endLetter; k++){
                if (i !== skip && j !== skip && k !== skip){
                    counter++;
                    result += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + ' '
                }
            }
        }
    }
    console.log(result + counter);
    


}

letters(['f', 'k', 'h']);