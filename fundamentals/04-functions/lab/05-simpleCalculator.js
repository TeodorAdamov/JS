function calculator(num1, num2, operator) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    if (operator === 'multiply') {
       return multiply(num1,num2);
    } else if (operator === 'divide') {
       return divide(num1,num2);
    } else if (operator === 'add') {
       return add(num1, num2);
    } else {
       return subtract(num1, num2)
    }
}

console.log(calculator(50, 44, 'multiply'))