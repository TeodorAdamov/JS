function demo(input) {

    for (let nameTown of input) {

        let [townName, latitude, longitude] = nameTown.split(' | ')
        let obj = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(obj);
    }
    
}

demo([
    'Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625'])