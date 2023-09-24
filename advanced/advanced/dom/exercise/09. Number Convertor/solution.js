function solve() {
    const selectElement = document.querySelector('#selectMenuTo');
    const createHexadecimal = document.createElement('option');
    createHexadecimal.text = 'Hexadecimal';
    createHexadecimal.value = 'hexadecimal';
    const createBinary = document.createElement('option');
    createBinary.text = 'Binary';
    createBinary.value = 'binary';
    selectElement.appendChild(createHexadecimal);
    selectElement.appendChild(createBinary);
    document.getElementsByTagName('button')[0].onclick = getNumber

    function getNumber() {
        const selectElement = document.querySelector('#selectMenuTo');
        const selectedOption = selectElement.value
        const input = document.getElementById('input')
        const output = document.getElementById('result')


        const num = Number(input.value)
        let result;
        if (selectedOption === 'binary') {
            result = decimalToBinary(num)
        } else if (selectedOption === 'hexadecimal') {
            result = decimalToHexadecimal(num)
        }

        output.value = result

        function decimalToBinary(num) {
            return num.toString(2)
        }

        function decimalToHexadecimal(num) {
            return num.toString(16).toUpperCase()
        }
    }
}
