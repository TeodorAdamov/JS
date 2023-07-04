function garage(data) {

    let myGarage = {}
    for (let line of data) {
        let [garageNumber, restData] = line.split(' - ');
        garageNumber = Number(garageNumber);
        restData = restData.split(': ').join(' - ');

        if (!myGarage[garageNumber]) {
            myGarage[garageNumber] = [];
        }
        myGarage[garageNumber].push(restData);

    }

    Object.entries(myGarage).forEach(([garNumber, cars]) => {
        console.log(`Garage № ${garNumber}`);
        cars.forEach(a => console.log(`--- ${a}`))
    })
}



garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
)