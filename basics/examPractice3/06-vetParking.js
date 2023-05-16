function vetParking(input) {
    let days = Number(input[0]);
    let hoursEveryDay = Number(input[1]);

    let total = 0;

    for (let curDay = 1; curDay <= days; curDay++) {
        let eachDayPrice = 0;
        for (let curHour = 1; curHour <= hoursEveryDay; curHour++) {
            if (curDay % 2 === 0 && curHour % 2 !== 0) {
                eachDayPrice += 2.5;
            } else if (curDay % 2 !== 0 && curHour % 2 === 0) {
                eachDayPrice += 1.25
            } else {
                eachDayPrice += 1;
            }
        }
        total += eachDayPrice;
        console.log(`Day: ${curDay} - ${eachDayPrice.toFixed(2)} leva`);
    }
    console.log(`Total: ${total.toFixed(2)} leva`);

}

vetParking(["2", "5"])
