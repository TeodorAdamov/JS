function timeToWalk(steps, footLength, speed) {


    let distance = steps * footLength / 1000;
    const timeToTravelKm = distance / speed;
    
    let hours = Math.floor(timeToTravelKm)
    const minutesTotal = timeToTravelKm * 60;
    let minutes = Math.floor(minutesTotal)
    let seconds = Number((minutesTotal % 1 * 60).toFixed(0))

    distance *= 1000;

    while (distance >= 500) {
        minutes++;
        distance -= 500;
        if (minutes === 60) {
            minutes = 0
            hours++;
        }
    }

    if (hours < 10) {
        hours = '0' + hours.toString();
    }
    if (minutes < 10) {
        minutes = '0' + minutes.toString();
    }
    if (seconds < 10) {
        seconds = '0' + seconds.toString();
    }

    console.log(`${hours}:${minutes}:${seconds}`);

}

timeToWalk(4000, 0.60, 5)