function city(myCity) {

    let keys = Object.keys(myCity);
    for(let key of keys) {
        console.log(`${key} -> ${myCity[key]}`);          
    }
}

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
   }
   )