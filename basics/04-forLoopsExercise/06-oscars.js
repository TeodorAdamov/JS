function oscars(input){
    let actorName = input[0];
    let points = Number(input[1]);
    let evaluativesCount = Number(input[2]);
    

    for (let i = 3; i < evaluativesCount * 2 + 3; i+=2){
    let evaluativeName = input[i];
    let pointsGiven = Number(input[i + 1]);
    let length = evaluativeName.length;

    points += (length * pointsGiven) / 2;

    if (points > 1250.5){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
        return;
    } 
    }
    if (points < 1250.5){
        let pointsNeeded = 1250.5 - points
        console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
    }

}

oscars
(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])