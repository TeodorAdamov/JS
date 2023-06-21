function     spaceTravel(input){
    let route = input.shift().split('||');
    //console.log(route);
    let fuel = Number(input[0]);
    let ammunition = Number(input[1]);
    for(let element of route){
        let command = element.split(' ');
        let ammo = 0;
        ammo += ammunition;
        let restFuel = ammo - index
       // console.log(command);
       let action = command[0];
       let index = Number(command[1]);
       switch(action){
        case 'Travel':
           
           if(fuel >= index){
            console.log(`The spaceship travelled ${index} light-years.`);
 
           }else{
            return "Mission failed."
           }
        break;
        case 'Enemy':
            let restFuel = ammo - index;
            if(restFuel >= index){
                ammo = restFuel;
                console.log(`An enemy with ${index} armour is defeated.`);
 
 
            }else if(restFuel < index){
                
                console.log(`An enemy with ${index} armour is outmaneuvered.`);
           
            }else{
                console.log("Mission failed.");
            }
 
        break;
        case 'Repair':
          
          
          console.log(`Ammunitions added: ${index * 2}.`);
          console.log(`Fuel added: ${index}.`);
        break;
        case 'Titan':
          console.log("You have reached Titan, all passengers are safe.");
        break;
       }
    }
}
//spaceTravel([ 'Travel 10||Enemy 30||Repair 15||Titan', '50', '80']);
spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy50||Titan', '60', '100']);