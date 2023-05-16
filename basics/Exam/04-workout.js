function workout(input){
    let days = Number(input[0])
    let km = Number(input[1])
    let totalKm = 0;

    for (let i = 2; i <= days + 2; i++){
        totalKm += km;
        km = km + (input[i] / 100) * km

        
    }
    if (totalKm >= 1000) {
        let kmOver1000 = totalKm - 1000;
        console.log(`You've done a great job running ${Math.ceil(kmOver1000)} more kilometers!`);
    } else {
        let kmNeededTo1000 = 1000 - totalKm;
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(kmNeededTo1000)} more kilometers`);
    }
}

workout([
    '5',
    '30',
    '10',
    '15',
    '20',
    '5',
    '12']);