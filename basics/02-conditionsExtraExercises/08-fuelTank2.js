function fuelTank2(input) {
    let fuelType = input[0];
    let fuelAmount = Number(input[1]);
    let discountCard = input[2];

    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;
    let totalGasPrice = fuelAmount * gasPrice;
    let totalGasolinePrice = fuelAmount * gasolinePrice;
    let totalDieselPrice = fuelAmount * dieselPrice;

    if (discountCard === "Yes") {
        totalGasPrice = totalGasPrice - 0.08 * fuelAmount;
        totalGasolinePrice = totalGasolinePrice - 0.18 * fuelAmount;
        totalDieselPrice = totalDieselPrice - 0.12 * fuelAmount;
    }

    if (fuelAmount >= 20 && fuelAmount <= 25) {
        totalGasPrice = totalGasPrice * 0.92;
        totalDieselPrice = totalDieselPrice * 0.92;
        totalGasolinePrice = totalGasolinePrice * 0.92;

    } else if (fuelAmount > 25) {
        totalGasPrice = totalGasPrice * 0.9;
        totalDieselPrice = totalDieselPrice * 0.9;
        totalGasolinePrice = totalGasolinePrice * 0.9;
    }

    if (fuelType === "Gas") {
        console.log(`${totalGasPrice.toFixed(2)} lv.`);
    } else if (fuelType === "Gasoline") {
        console.log(`${totalGasolinePrice.toFixed(2)} lv.`);
    } else if (fuelType === "Diesel") {
        console.log(`${totalDieselPrice.toFixed(2)} lv.`);
    }
}

fuelTank2(["Gas", "30", "Yes"]);