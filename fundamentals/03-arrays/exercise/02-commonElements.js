function commonElements(arr1, arr2) {

    for (let i of arr1) {
        for (let j of arr2) {
            if (i === j){
                console.log(j);
            }
        }
    }
}

commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])