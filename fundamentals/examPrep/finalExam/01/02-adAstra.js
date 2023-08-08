function adAstra(data){

    let pattern = /(?<separator>[#|]{1})(?<name>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g

    let match = pattern.exec(data);
    let calories = 0;
    let myFood = [];
    
    while(match !== null) {
        let food = {
            name: match.groups.name,
            bestBefore: match.groups.date,
            nutrition: Number(match.groups.calories)
        }
        myFood.push(food);
        calories += Number(match.groups.calories)
        match = pattern.exec(data);
    }

    let days = Math.floor(calories / 2000)
    console.log(`You have food to last you for: ${days} days!`);
    myFood.forEach(food => {
        console.log(`Item: ${food.name}, Best before: ${food.bestBefore}, Nutrition: ${food.nutrition}`);
    })   
}

adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]
    )