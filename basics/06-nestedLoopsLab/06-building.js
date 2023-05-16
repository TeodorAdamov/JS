function building(input) {
    let floorsCount = Number(input[0]);
    let roomsCount = Number(input[1]);
    
    
    

    for (let floor = floorsCount; floor > 0; floor--){
        let currentFloor = ''
        for (let room = 0; room < roomsCount; room++){
            if (floor === Number(input[0])){
            currentFloor += `L${floor}${room} `
            } else if (floor % 2 === 0){
                currentFloor += `O${floor}${room} `
            } else {
                currentFloor += `A${floor}${room} `
            }
            

        }
        console.log(currentFloor);
        
        
    }
}

building(["9",

"5"])