function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);
    let timeLate = 0;
    let timeEarly = 0;
    let timeLateHours = 0;
    let timeLateMinutes = 0;
    let timeEarlyHours = 0;
    let timeEarlyMinutes = 0;


    let examStart = examHour * 60 + examMinute;
    let arrival = arrivalHour * 60 + arrivalMinute;
    let EarlyOnTimeLate = '';

    if (arrival <= examStart) {
        if (examStart - 30 > arrival) {
            EarlyOnTimeLate = 'Early';
        } else {
            EarlyOnTimeLate = 'On time';
        }
    } else {
        EarlyOnTimeLate = 'Late'
    }
    console.log(EarlyOnTimeLate);


    if (arrival > examStart) {
        timeLate = arrival - examStart;
        timeLateHours = Math.floor(timeLate / 60);
        timeLateMinutes = timeLate % 60;

    } else {
        timeEarly = examStart - arrival;
        timeEarlyHours = Math.floor(timeEarly / 60);
        timeEarlyMinutes = timeEarly % 60;
    }

    if (timeLateMinutes > 59) {
        timeLateHours += 1;
        timeLateMinutes -= 60;

    }

    if (timeEarlyMinutes > 59) {
        timeEarlyHours += 1;
        timeEarlyMinutes -= 60;
    }

    if (timeLate > 0 && timeLate < 60) {
        console.log(`${timeLateMinutes} minutes after the start`);
    } else if (timeLate >= 60) {
        if (timeLateMinutes < 10) {
            console.log(`${timeLateHours}:0${timeLateMinutes} hours after the start`);
        } else {
            console.log(`${timeLateHours}:${timeLateMinutes} hours after the start`);
        }

    }

    if (timeEarly > 0 && timeEarly < 60) {
        console.log(`${timeEarlyMinutes} minutes before the start`);
    } else if (timeEarly >= 60) {
        if (timeEarlyMinutes < 10) {
            console.log(`${timeEarlyHours}:0${timeEarlyMinutes} hours before the start`);
        } else {
            console.log(`${timeEarlyHours}:${timeEarlyMinutes} hours before the start`);
        }
    }






}


onTimeForExam(["11", "30", "12", "29"])