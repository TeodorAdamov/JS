function factorialDivision(numOne, numTwo) {
    const result = (factoriel(numOne) / factoriel(numTwo)).toFixed(2);
    return result;
    function factoriel(number) {
        if (number === 0){
            return 1;
        }
        return factoriel(number - 1) * number;
    }
}

console.log(factorialDivision(5, 2))