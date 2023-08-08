function matchDates(dates) {

    let pattern = /\b\d{2}(\.|\/|-)[A-Z]{1}[a-z]{2}\1\d{4}\b/g
    let match = pattern.exec(dates)
    let validDates = []

    while (match !== null) {

        validDates.push(match[0]);
        match = pattern.exec(dates)
    }

    for (let date of validDates) {
        let [day, month, year] = date.split(/[\/|\.|-]/)
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])