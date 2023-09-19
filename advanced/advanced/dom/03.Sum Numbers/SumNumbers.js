function calc() {
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    const sum = document.getElementById('sum')

    const result = Number(num1) + Number(num2);
    sum.value = result
    // TODO: sum = num1 + num2
}
