function smallestTwoNumbers(array) {

    array.sort((a, b) => a - b);
    let smalletsTwo = array.slice(0, 2);
    console.log(smalletsTwo.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5])