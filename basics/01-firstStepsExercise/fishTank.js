function fishTank(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentFilled = Number(input[3]) / 100;

    let fishTankVolume = (lenght * width * height) / 1000;
    let finalLitres = fishTankVolume - (fishTankVolume * percentFilled);

    console.log(finalLitres);

}

fishTank(["85","75","47","17"]);