function breakDuration(input) {
    let seriesName = input[0];
    let timePerEpisode = Number(input[1]);
    let breakDuration = Number(input[2]);
    let lunchTime = breakDuration * 1 / 8;
    let relaxTime = breakDuration * 1 / 4;

    let totalTimeLeft = (breakDuration - (lunchTime + relaxTime));
    
    if (totalTimeLeft >= timePerEpisode) {
        let timeLeft = Math.abs(breakDuration - (timePerEpisode + lunchTime + relaxTime))
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    } else {
        let timeNeeded = Math.abs(breakDuration - (timePerEpisode + lunchTime + relaxTime));
       console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
}

breakDuration(["Teen Wolf", "48", "60"]); 