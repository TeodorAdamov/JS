function passwordGenerator(arr) {

    let string = arr[0] + arr[1];
    const replaceCharArr = arr[2].toUpperCase().split('');
    let index = 0;

    for (const char of string) {

        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {

            string = string.replace(char, replaceCharArr[index])
            index++
        }
        if (index === replaceCharArr.length) {
            index = 0;
        }
    }
    console.log(`Your generated password is ${string.split('').reverse().join('')}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange'])