function jansNotation(data) {

    const numbers = [];


    data.forEach((element, index) => {
        if (Number(element)) {
            numbers.push(element);
        } else if (element === '+') {
            const result = numbers.pop() + numbers.pop();
            numbers.push(result);
        } else if (element === '-') {
            const lastNum = numbers.pop();
            const beforeLastNum = numbers.pop();
            const result = beforeLastNum - lastNum;
            numbers.push(result);
        } else if (element === '*') {
            const result = numbers.pop() * numbers.pop();
            numbers.push(result);
        } else if (element === '/') {
            const lastNum = numbers.pop();
            const beforeLastNum = numbers.pop();
            const result = beforeLastNum / lastNum;
            numbers.push(result);
        }


    });

    if (numbers.length > 1) {
        console.log('Error: too many operands!');
    } else if (isNaN(numbers[0])) {
        console.log('Error: not enough operands!');
    } else {
        console.log(numbers[0]);
    }

}

jansNotation([15,
    '/']
   
   
)
