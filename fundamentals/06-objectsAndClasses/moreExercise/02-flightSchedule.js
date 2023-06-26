function flightSchedule(array) {

    let flights = array[0];
    let statusChange = array[1];
    let string = array[2][0];

    let myFlights = [];

    for (let flight of flights) {
        let [code, ...city] = flight.split(" ")
        let tempFlight = {
            code: code,
            city: city.join(' '),
            status: 'Ready to fly'
        }
        myFlights.push(tempFlight);
    }

    for (let curChange of statusChange) {
        let [code, status] = curChange.split(" ");
        let flightToAddStatus = myFlights.find(x => x.code === code)

        if (flightToAddStatus) {
            flightToAddStatus.status = status;
        }
    }

    myFlights.filter(a => a.status === string)
    .forEach(a => console.log(`{ Destination: '${a.city}', Status: '${a.status}' }`))
}

flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
'WN498 Las Vegas',
'WN3145 Ohio',
'WN612 Alabama',
'WN4010 New York',
'WN1173 California',
'DL2120 Texas',
'KL5744 Illinois',
'WN678 Pennsylvania'],
['DL2120 Cancelled',
'WN612 Cancelled',
'WN1173 Cancelled',
'SK430 Cancelled'],
['Cancelled']
]



)