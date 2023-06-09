function searchForANumber(array, commands) {
    let takeItems = commands[0];
    let deleteItems = commands[1];
    let searchForItem = commands[2];

    let newArray = array.splice(0, takeItems);
    newArray.splice(0, deleteItems);
    
    let count = 0;
    
    for (let el of newArray) {
        if (el === searchForItem) {
            count++;
        }
    }
    console.log(`Number ${searchForItem} occurs ${count} times.`);
    

}

searchForANumber([7, 1, 5, 8, 2, 7],[3, 1, 5])