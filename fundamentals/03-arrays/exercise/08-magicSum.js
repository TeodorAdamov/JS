function magicSum(array, number) {
    for (let i = 0; i < array.length; i++) {
       for (let j = array.length - 1; j > i; j--) {
        if (array[i] + array[j] === number) {
            console.log(`${array[i]} ${array[j]}`);
        }
       } 
    }

}

magicSum([1, 7, 6, 2, 19, 23],8)