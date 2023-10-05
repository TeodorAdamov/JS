function juice(input) {

    const juices = {}
    const bottles = new Map();

    input.forEach(juice => {
        const [juiceName, juiceQuantity] = juice.split(' => ');

        if (!juices.hasOwnProperty(juiceName)) {
            juices[juiceName] = 0;
        }

        juices[juiceName] += Number(juiceQuantity);

        while (juices[juiceName] >= 1000) {
            juices[juiceName] -= 1000;
            if (!bottles.has(juiceName)) {
                bottles.set(juiceName, 0)
            }

            bottles.set(juiceName, bottles.get(juiceName) + 1)
        }
    });

    for (let [key, value] of bottles) {
        console.log(`${key} => ${value}`)
    }
}

juice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)