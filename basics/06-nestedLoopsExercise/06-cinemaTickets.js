function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++
    let totalTickets = 0;
    let studentsTotal = 0;
    let standardTotal = 0;
    let kidsTotal = 0;

    while (command !== 'Finish') {
        let movieName = command
        let freeSpots = Number(input[index]);
        index++;
        let studentsCount = 0;
        let standardCount = 0;
        let kidsCount = 0;
        let currentTotal = 0;
        let command1 = input[index];
        index++;
        

        while (command1 !== 'End') {
            let ticketType = command1

            if (ticketType === 'student') {
                studentsCount++;
                studentsTotal++;
            } else if (ticketType === 'standard') {
                standardCount++;
                standardTotal++;
            } else {
                kidsCount++;
                kidsTotal++;
            }
            currentTotal = studentsCount + standardCount + kidsCount
            totalTickets++;
            if (currentTotal >= freeSpots){
                break;
            }

            command1 = input[index];
            index++;
        }
        let currentMoviePercent = currentTotal / freeSpots * 100
        console.log(`${movieName} - ${currentMoviePercent.toFixed(2)}% full.`);
        command = input[index];
        index++


    }
    let studentsTotalPercent = studentsTotal / totalTickets * 100
    let standardTotalPercent = standardTotal / totalTickets * 100
    let kidsTotalPercent = kidsTotal / totalTickets * 100

console.log(`Total tickets: ${totalTickets}`);
console.log(`${studentsTotalPercent.toFixed(2)}% student tickets.`);
console.log(`${standardTotalPercent.toFixed(2)}% standard tickets.`);
console.log(`${kidsTotalPercent.toFixed(2)}% kids tickets.`);


}

cinemaTickets(["Taxi","10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])