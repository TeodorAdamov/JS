function fuelTank(input) {
    let fuelType = input[0];
    let fuelAmount = input[1];

    if (fuelAmount < 25) {

        if (fuelType === "Gasoline" || fuelType === "Diesel" || fuelType === "Gas") {
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
        }
        else {
            console.log('Invalid fuel!');
        }
    }
    else if (fuelAmount >= 25) {

        if (fuelType === "Gasoline" || fuelType === "Diesel" || fuelType === "Gas") {
            console.log(`You have enough ${fuelType.toLowerCase()}.`);
        }
        else {
            console.log('Invalid fuel!');
        }
    }
}
fuelTank(["Diesel", "25"])