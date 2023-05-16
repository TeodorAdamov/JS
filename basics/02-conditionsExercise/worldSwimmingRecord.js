function swimming(input) {
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let totalTime = distance * timePerMeter
    let delay = Math.floor(distance / 15) * 12.5;
    let totalTimeDelayed = totalTime + delay;

    if (totalTimeDelayed < worldRecord) {       
        console.log(` Yes, he succeeded! The new world record is ${totalTimeDelayed.toFixed(2)} seconds.`);
    } else { 
        let timeNotEnough = totalTimeDelayed - worldRecord
        console.log(`No, he failed! He was ${timeNotEnough.toFixed(2)} seconds slower.`);
    }


}

swimming(["55555.67", "3017", "5.03"]);