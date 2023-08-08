function pirates(data) {

    let cities = [];

    for (let line of data) {
        if (line === 'End') {
            break;;
        }

        if (line.includes('||')) {
            let [city, population, gold] = line.split('||');
            let isExisting = cities.find(obj => obj.city === city);

            if (isExisting) {
                isExisting.population += Number(population);
                isExisting.gold += Number(gold);
            } else {
                let myCity = {
                    city,
                    population: Number(population),
                    gold: Number(gold),
                }
                cities.push(myCity);
            }

        } else if (line.includes('=>')) {
            let [command, ...tokens] = line.split('=>');

            if (command === 'Plunder') {
                let [city, peopleKilled, goldStolen] = tokens;
                let isExisting = cities.find(obj => obj.city === city);

                isExisting.population -= Number(peopleKilled);
                isExisting.gold -= Number(goldStolen);
                console.log(`${city} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);

                if (isExisting.population === 0 || isExisting.gold === 0) {
                    let index = cities.indexOf(isExisting);
                    cities.splice(index, 1)
                    console.log(`${city} has been wiped off the map!`);
                }

            } else if (command === 'Prosper') {
                let [city, goldIncrease] = tokens;
                let isExisting = cities.find(obj => obj.city === city);
                goldIncrease = Number(goldIncrease);

                if (goldIncrease < 0) {
                    console.log("Gold added cannot be a negative number!");
                } else {
                    isExisting.gold += goldIncrease;
                    console.log(`${goldIncrease} gold added to the city treasury. ${city} now has ${isExisting.gold} gold.`);
                }
            }
        }
    }

    if (cities.length > 0) {
        console.log(`Ahoy, Captain! There are ${cities.length} wealthy settlements to go to:`)
        cities.forEach(city => {
            console.log(`${city.city} -> Population: ${city.population} citizens, Gold: ${city.gold} kg`);
        })
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

pirates([
    "Nassau||95000||1000",

    "Campeche||270000||690",

    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])

