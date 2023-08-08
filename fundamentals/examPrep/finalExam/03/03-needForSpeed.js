function needForSpeed(data) {

    let carsCount = Number(data.shift());
    let cars = [];
    for (let i = 0; i < carsCount; i++) {
        let [model, mileage, fuel] = data.shift().split('|');

        let car = {
            model,
            mileage: Number(mileage),
            fuel: Number(fuel),
        }
        cars.push(car)
    }

    for (let line of data) {
        if (line === 'Stop') {
            break;
        }
        let [command, car, tokenOne, tokenTwo] = line.split(' : ');

        if (command === 'Drive') {
            let distance = Number(tokenOne);
            let fuelNeeded = Number(tokenTwo);

            let carToDrive = cars.find(el => el.model === car);
            if (carToDrive.fuel >= fuelNeeded) {
                carToDrive.mileage += distance;
                carToDrive.fuel -= fuelNeeded;
                console.log(`${carToDrive.model} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);
            } else {
                console.log("Not enough fuel to make that ride");
            }
            if (carToDrive.mileage >= 100000) {
                let index = cars.indexOf(carToDrive);
                cars.splice(index, 1)
                console.log(`Time to sell the ${car}!`);
            }
        } else if (command === 'Refuel') {
            let fuelToRefill = Number(tokenOne);
            let carToDrive = cars.find(el => el.model === car);
            let oldFuel = carToDrive.fuel;
            carToDrive.fuel += fuelToRefill;

            if (carToDrive.fuel > 75) {
                fuelToRefill = 75 - oldFuel;
                carToDrive.fuel = 75
            }
            console.log(`${carToDrive.model} refueled with ${fuelToRefill} liters`);

        } else if (command === 'Revert') {
            let km = Number(tokenOne);
            let carToDrive = cars.find(el => el.model === car);
            carToDrive.mileage -= km;

            if (carToDrive.mileage >= 10000) {
                console.log(`${carToDrive.model} mileage decreased by ${km} kilometers`);
            }
            if (carToDrive.mileage < 10000) {
                carToDrive.mileage = 10000
            }
        }
    }

    cars.forEach(car => {
        console.log(`${car.model} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`);
    })
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
)