function travel(data) {

    let travelList = {};
    for (let line of data) {
        let [country, city, price] = line.split(' > ');

        if (!travelList.hasOwnProperty(country)) {
            travelList[country] = {};
        }
        if (!travelList[country].hasOwnProperty(city)) {
            travelList[country][city] = Number(price);
        }
        let currentTownPrice = travelList[country][city]
        if (price < currentTownPrice) {
            travelList[country][city] = Number(price);
        }

    }

    let entries = Object.entries(travelList).sort((a, b) => a[0].localeCompare(b[0]))

    for (let [country, townObject] of entries) {
        let townEntries = Object.entries(townObject).sort((a, b) => a[1] - b[1]);
        let result = '';
        for (let [town, price] of townEntries) {
            result += `${town} -> ${price} `;
        }
        console.log(`${country} -> ${result}`);
    }
}
travel([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sofia > 200",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",

])