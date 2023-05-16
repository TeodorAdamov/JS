function shopping (input){
    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let gpuPrice = 250;
    let cpuPrice = (gpuCount * gpuPrice) * 0.35 ;
    let ramPrice = (gpuCount * gpuPrice) * 0.1;
    let totalPrice = (gpuPrice * gpuCount) + (cpuPrice * cpuCount) + (ramPrice * ramCount);

    if (gpuCount > cpuCount){
        totalPrice *= 0.85 ;
    }
        let finalSum = Math.abs(totalPrice - budget);
    if (budget >= totalPrice){
        console.log(`You have ${finalSum.toFixed(2)} leva left!`);
    }   else {
        console.log(`Not enough money! You need ${finalSum.toFixed(2)} leva more!`);
    }

}

shopping(["920.45","3","1","1"]);