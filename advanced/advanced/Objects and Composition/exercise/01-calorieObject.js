function calorieObject(input) {

    const list = {};

    input.forEach((element, index) => {
        if (index % 2 === 0) {
            list[element] = Number(input[index + 1])
        }
    });

    console.log(list);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])