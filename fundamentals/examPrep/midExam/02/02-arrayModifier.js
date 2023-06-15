function arrayModifier(array) {
    let numbers = array.shift().split(' ').map(Number);
    
    let commandArray = array.shift().split(' ');
    let command = commandArray[0];

    while (command !== 'end') {
        switch(command) {
            case 'swap':
                let firstSwapIndex = Number(commandArray[1]);
                let secondSwapIndex = Number(commandArray[2]);
                numbers[firstSwapIndex] = numbers.splice(secondSwapIndex, 1, numbers[firstSwapIndex])[0];
                break;
            case 'multiply':
                let firstMultiplyIndex = Number(commandArray[1]);
                let secondMultiplyIndex = Number(commandArray[2]);
                let multiplied = numbers[firstMultiplyIndex] * numbers[secondMultiplyIndex];
                numbers.splice(firstMultiplyIndex, 1, multiplied)

                break;
            case 'decrease':
                numbers = numbers.map(a => a - 1)
                break;
        }

        commandArray = array.shift().split(' ');
        command = commandArray[0];
    }

    

    console.log(numbers.join(', '));

}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])