function transportPrice(input){
    let kmCount = Number(input[0]);
    let timeOfDay = input[1];

    let taxiPricePerKm = 0;
    let busPricePerKm = 0.09;
    let trainPricePerKm = 0.06;

    if (timeOfDay === "day") {
        taxiPricePerKm += 0.79;  
    } else {
        taxiPricePerKm += 0.9;
    }

    if (kmCount < 20) {
        let totalPriceByTaxi = taxiPricePerKm * kmCount + 0.7;
        console.log(totalPriceByTaxi.toFixed(2));
    } else if (kmCount < 100) {
        let totalPriceByBus = busPricePerKm * kmCount
        console.log(totalPriceByBus.toFixed(2));
    }   else {
        let totalPriceByTrain = trainPricePerKm * kmCount;
        console.log(totalPriceByTrain.toFixed(2));
    }

}

transportPrice(["180", "night"]);