
function repainting(input) { 
    let nylonNeeded = Number(input[0]);
    let paintNeeded = Number(input[1]);
    let thinnerNeeded = Number(input[2]);
    let hoursNeeded = Number(input[3]);

    let nylonPrice = (nylonNeeded + 2) * 1.50;
    let paintPrice = (paintNeeded * 1.10 ) * 14.50;
    let thinnerPrice = thinnerNeeded * 5.00;
    let bagPrice = 0.40;
    let workersPaymentFor1Hour = ((nylonPrice + paintPrice + thinnerPrice + bagPrice) * 0.3) * hoursNeeded;

    let finalPrice = nylonPrice + paintPrice + thinnerPrice + bagPrice + workersPaymentFor1Hour
    console.log(finalPrice);

}

repainting(["5","10","10","1"]);