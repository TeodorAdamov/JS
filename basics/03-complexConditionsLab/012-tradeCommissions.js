function tradeCommissions(input) {
    let town = input[0];
    let salesValue = Number(input[1]);
    let commission = 0;

    switch (town) {
        case "Sofia":
            if (salesValue >= 0 && salesValue <= 500) {
                commission += 0.05 * salesValue;
            } else if (salesValue > 500 && salesValue <= 1000) {
                commission += 0.07 * salesValue;
            } else if (salesValue > 1000 && salesValue <= 10000) {
                commission += 0.08 * salesValue;
            } else if (salesValue > 10000) {
                commission += 0.12 * salesValue;
            } else {
                console.log("error");
            } break;
        case "Varna":
            if (salesValue >= 0 && salesValue <= 500) {
                commission += 0.045 * salesValue;
            } else if (salesValue > 500 && salesValue <= 1000) {
                commission += 0.075 * salesValue;
            } else if (salesValue > 1000 && salesValue <= 10000) {
                commission += 0.1 * salesValue;
            } else if (salesValue > 10000) {
                commission += 0.13 * salesValue;
            } else {
                console.log("error");
            } break;
        case "Plovdiv":
            if (salesValue >= 0 && salesValue <= 500) {
                commission += 0.055 * salesValue;
            } else if (salesValue > 500 && salesValue <= 1000) {
                commission += 0.08 * salesValue;
            } else if (salesValue > 1000 && salesValue <= 10000) {
                commission += 0.12 * salesValue;
            } else if (salesValue > 10000) {
                commission += 0.145 * salesValue;
            } else {
                console.log("error");
            } break;
        default:
            console.log("error"); break;
    }

    if (commission > 0) {
        console.log(commission.toFixed(2));
    }


}

tradeCommissions(["Plovdiv", "-20"])