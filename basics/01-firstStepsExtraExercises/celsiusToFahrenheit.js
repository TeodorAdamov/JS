function celsiusToFahrenheit(input){
    let celsiusDegrees = Number(input[0]);
    let fahrenheitDegrees = (celsiusDegrees * 9 / 5 + 32).toFixed(2);
    console.log(fahrenheitDegrees);
}

celsiusToFahrenheit(["22"]);