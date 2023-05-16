function logistics(input) {
    let boxesCount = Number(input[0]);
    let averagePrice = 0;
    let price = 0;
    let percentByBus = 0;
    let percentByTruck = 0;
    let percentByTrain = 0;
    let tons = 0;

    for (let i = 1; i <= boxesCount; i++) {
        let eachBox = Number(input[i]);
        tons += eachBox;

        if (eachBox <= 3) {
            price += eachBox * 200
            percentByBus += eachBox
        } else if (eachBox <= 11) {
            price += eachBox * 175
            percentByTruck += eachBox
        } else {
            price += eachBox * 120
            percentByTrain += eachBox
        }
    }

    console.log((price / tons).toFixed(2));
    console.log(((percentByBus / tons) * 100).toFixed(2) + '%');
    console.log(((percentByTruck / tons) * 100).toFixed(2) + '%');
    console.log(((percentByTrain / tons) * 100).toFixed(2) + '%');
}

logistics(['4', '1', '5', '16', '3']);