function trainingLab(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let workPlaceWidth = 70;
    let workPlaceLenght = 120;
    let corridorInMiddle = 100;

    let deskPerRow = Math.floor(((width * 100) - corridorInMiddle) / workPlaceWidth);
    let rows = Math.floor((lenght * 100) / workPlaceLenght);
    let totalSeats = (deskPerRow * rows) - 3;
    console.log(totalSeats);
    
}

trainingLab(["15", "8.9"]);