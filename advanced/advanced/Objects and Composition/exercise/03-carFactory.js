function carFactory(carOrder) {

    const car = {};

    Object.keys(carOrder).forEach(key => {
        if (key === 'model') {
            car[key] = carOrder[key];
        } else if (key === 'power') {
            if (carOrder.power <= 90) {
                car.engine = {
                    power: 90,
                    volume: 1800
                }
            } else if (carOrder.power <= 120) {
                car.engine = {
                    power: 120,
                    volume: 2400
                }
            } else {
                car.engine = {
                    power: 200,
                    volume: 3500
                }
            }
        } else if (key === 'carriage') {
            if (carOrder.carriage === 'hatchback') {
                car.carriage = {
                    type: 'hatchback',
                    color: carOrder.color
                }
            } else {
                car.carriage = {
                    type: 'coupe',
                    color: carOrder.color
                }
            }
        } else {

            if (carOrder.wheelsize % 2 === 0) {
                carOrder.wheelsize--
            }
            car.wheels = new Array(4)
            car.wheels.fill(carOrder.wheelsize)
        }
    })

    return car
}

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}))
