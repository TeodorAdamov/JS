function validityCheck(x1, y1, x2, y2) {

    const firstResult = Math.sqrt(((0 - x1) ** 2) + ((0 - y1) ** 2));
    const secondResult = Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2));
    const thirdResult = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

    if (Number.isInteger(firstResult)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(secondResult)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    
    if (Number.isInteger(thirdResult)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validityCheck(2, 1, 1, 1)