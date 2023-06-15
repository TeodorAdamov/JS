function blackFlag(data) {

    let daysOfPlunder = Number(data[0])
    let dailyPlunder = Number(data[1])
    let expectedPlunder = Number(data[2])
    let totalPlunder = 0;
    

    for (let days = 1; days <= daysOfPlunder; days++) {
        if (days % 3 === 0) {
            totalPlunder += dailyPlunder * 1.5
        } else { 
            totalPlunder += dailyPlunder
        }
        

        if (days % 5 === 0) {
            totalPlunder *= 0.7
        }
    }

    if(totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percent = totalPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }

}

blackFlag(["10","20","380"])

