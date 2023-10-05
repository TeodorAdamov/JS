function carCompany(input) {

    const cars = {};

    input.forEach(line => {
        const [carBrand, carModel, producerCars] = line.split(' | ');

        if (!cars.hasOwnProperty(carBrand)) {
            cars[carBrand] = {};
        }
        if (!cars[carBrand][carModel]) {
            cars[carBrand][carModel] = 0;
        }


        cars[carBrand][carModel] += Number(producerCars)
    })

    for (let [brand, models] of Object.entries(cars)) {
        console.log(brand);
        for (let [model, quant] of Object.entries(models)) {
            console.log(`###${model} -> ${quant}`);
        }
    }
}

carCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
])