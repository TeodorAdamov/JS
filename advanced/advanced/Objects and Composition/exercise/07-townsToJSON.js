function townsToJSON(arr) {

    const towns = [];
    arr.shift();
    arr.forEach(element => {
        const [_, town, latitude, longitude] = element.split(/ ?[\|] ?/);

        const myTown = {
            Town: town,
            Latitude: Number(Number(latitude).toFixed(2)),
            Longitude: Number(Number(longitude).toFixed(2)),
        }
        towns.push(myTown)
    });
    console.log(JSON.stringify(towns));
}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']

)