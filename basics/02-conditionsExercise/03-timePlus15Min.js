function time(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    minutes += 15;

    if (minutes > 59) {
        minutes -= 60;
        hour = hour + 1;
    }
    if (hour >= 24) {
        hour = 0;
    }
    if (minutes < 10) {
        console.log(`${hour}:0${minutes}`);
    } else {
     console.log(`${hour}:${minutes}`);
    }
}

time(["23", "59"])
