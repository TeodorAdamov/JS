function sort(num1, num2, num3) {
    let arr = [num1, num2, num3]

    let result = arr.sort((a, b) => b - a).join('\n');
    console.log(result);
}

sort(2, 1, 3)