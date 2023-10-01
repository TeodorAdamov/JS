function asd() {
    let num1 = 0;
    let num2 = 1;
    let num3;

    function fibonacci() {

        num3 = num1 + num2;

        num1 = num2;
        num2 = num3;

        return num1
    }


    return fibonacci;
}


let fib = asd();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13


