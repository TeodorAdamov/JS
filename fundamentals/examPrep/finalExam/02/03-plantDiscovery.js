function plantDiscovery(data) {

    data.shift();

    let flowers = [];


    for (let line of data) {
        if (line.includes("<->")) {
            let [plant, rarity] = line.split('<->');
            let isExisting = flowers.find(element => element.name === plant);

            if (isExisting) {
                isExisting.rarity = rarity
            } else {
                let myPlant = {
                    name: plant,
                    rarity: Number(rarity),
                    rating: []
                }
                flowers.push(myPlant);
            }
        } else if (line.includes('Rate')) {
            let [command, plant, rating] = line.split(/(?:: | - )/)
            let isExisting = flowers.find(element => element.name === plant);

            if (isExisting) {
                isExisting.rating.push(rating);
            } else {
                console.log('error');
            }
        } else if (line.includes('Update')) {
            let [command, plant, newRarity] = line.split(/(?:: | - )/)
            let isExisting = flowers.find(element => element.name === plant);
            if (isExisting) {
                isExisting.rarity = Number(newRarity);
            } else {
                console.log('error');
            }
        } else if (line.includes('Reset')) {
            let [command, plant] = line.split(': ')
            let isExisting = flowers.find(element => element.name === plant);

            if (isExisting) {
                isExisting.rating = [];
            } else {
                console.log('error');
            }
        }
    }
    console.log('Plants for the exhibition:');
    flowers.forEach(plant => {
        let rating = 0;
        if (plant.rating.length > 0) {
            rating = plant.rating.reduce((a, b) => Number(a) + Number(b)) / plant.rating.length
        }
        console.log(`- ${plant.name}; Rarity: ${plant.rarity}; Rating: ${rating.toFixed(2)}`);
    })


}

plantDiscovery([
    "2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])

