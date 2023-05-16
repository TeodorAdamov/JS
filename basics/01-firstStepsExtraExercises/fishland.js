function fishland(input){
    let mackerelPricePerKg = Number(input[0]);
    let sprinklePricePerKg = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let musselsKg = Number(input[4]);

    let bonitoPricePerKg = mackerelPricePerKg + (mackerelPricePerKg * 0.6);
    let safridPricePerKg = sprinklePricePerKg + (sprinklePricePerKg * 0.8);
    let musselsPricePerKg = 7.5;

    let totalBonitoPrice = bonitoKg * bonitoPricePerKg;
    let totalSafridPrice = safridKg * safridPricePerKg;
    let totalMusselsPrice = musselsKg * musselsPricePerKg;

    let totalPrice = totalBonitoPrice + totalSafridPrice + totalMusselsPrice;
    console.log(totalPrice.toFixed(2));

}

fishland(["6.90", "4.20", "1.5", "2.5", "1"]);