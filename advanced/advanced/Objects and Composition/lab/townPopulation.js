function townPopulation(townsArr) {

    const register = {};

    for (let line of townsArr) {
        let [name, population] = line.split(' <-> ');
        population = Number(population)

        if (!register.hasOwnProperty(name)) {
            register[name] = population;
        } else {
            register[name] += population
        }
    }

    Object.keys(register).forEach(el => {
        console.log(`${el} : ${register[el]}`);
    })
}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)