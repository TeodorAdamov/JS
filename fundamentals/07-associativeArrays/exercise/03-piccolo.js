function piccolo(data) {

    let parking = new Map();

    for (let line of data) {
        let [command, number] = line.split(', ');

        if (command === 'IN') {
            parking.set(number, 1)
        } else {
            parking.delete(number)
        }
    }
    if(parking.size === 0) {
        return 'Parking Lot is Empty'
    }
    Array.from(parking)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(x => console.log(x[0]))
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)