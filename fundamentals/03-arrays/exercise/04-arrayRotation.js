function arrayRotation(array, rotations) {
    for (let i = 1; i <= rotations; i++) {
        let firstElement = array.shift()
        array.push(firstElement);
    }
    console.log(array.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2)