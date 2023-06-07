function produceNewArray(array) {
    let newArray = [];

    for (let element of array) {
        if (element < 0 ) {
            newArray.unshift(element);
        } else {
            newArray.push(element);
        }
    }

    console.log(newArray.join("\n"));
}

produceNewArray(['7', '-2', '8', '9'])