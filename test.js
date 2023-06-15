let myArray = [12, -2, 55, 68, 80];

myArray[0] = myArray.splice(1, 1, myArray[0])[0];

console.log(myArray); // [-2,12,55,68,80]