function intOrFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3
    let print = sum % 1 === 0 ? 'Integer' : 'Float'
    console.log(`${sum} - ${print}`);
}

intOrFloat(9, 100, 1)