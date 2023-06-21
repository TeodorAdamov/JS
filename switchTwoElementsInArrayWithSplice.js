let myArray = [12, -2, 55, 68, 80];

let firstIndex = 2
let secondIndex = 4

myArray[firstIndex] = myArray.splice(secondIndex, 1, myArray[firstIndex])[0];

console.log(myArray); 