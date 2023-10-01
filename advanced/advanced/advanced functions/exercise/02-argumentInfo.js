function argumentInfo() {

    const input = Array.from(arguments);
    const types = {}

    input.forEach(arg => {
        const type = typeof arg;
        if (!types.hasOwnProperty(type)) {
            createTypes(arg)
        } else {
            updateTypeCount(arg)
        }
        console.log(`${typeof arg}: ${arg}`)
    })

    Object.entries(types).sort((a, b) => b[1] - a[1])
        .forEach(entry => {
            console.log(`${entry[0]} = ${entry[1]}`);
        })



    function createTypes(currentArg) {
        const type = typeof currentArg;
        types[type] = 1;
    }

    function updateTypeCount(currentArg) {
        types[typeof currentArg]++;
    }
}

argumentInfo({ name: 'bob' }, 3.333, 9.999)