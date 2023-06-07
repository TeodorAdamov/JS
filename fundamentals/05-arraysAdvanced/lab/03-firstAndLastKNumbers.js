function firstAndLastKSlice(array) {

    let k = array.shift();
    let firstElements = array.slice(0, k)
    let lastElements = array.slice(-k);

    console.log(firstElements.join(" "));
    console.log(lastElements.join(" "));

}

firstAndLastKSlice([2, 7, 8, 9])