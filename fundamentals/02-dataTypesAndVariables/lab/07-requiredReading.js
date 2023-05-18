function reading(pageCount, pagePerHour, daysToReadBook) {
    let totalTime = pageCount / pagePerHour;
    let hoursPerDay = totalTime / daysToReadBook;

    console.log(hoursPerDay);

}

reading(212, 20, 2)