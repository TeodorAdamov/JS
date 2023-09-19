function roadRadar(speed, area) {

    const limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let isInTheLimit = true;


    if (speed > limits[area]) {
        isInTheLimit = false;
    }

    if (isInTheLimit) {
        console.log(`Driving ${speed} km/h in a ${limits[area]} zone`);
    } else {
        const overTheLimit = speed - limits[area];
        let status = ''
        if (overTheLimit <= 20) {
            status = 'speeding';
        } else if (overTheLimit <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${overTheLimit} km/h faster than the allowed speed of ${limits[area]} - ${status} `);
    }
}
roadRadar(200, 'motorway')