function pinCodes(input) {
    const firstNumberMax = Number(input[0]);
    const secondNumberMax = Number(input[1]);
    const thirdNumberMax = Number(input[2]);
 
    for (let i = 2; i <= firstNumberMax; i += 2) {
        for (let j = 2; j <= secondNumberMax; j++) {
            for (let k = 2; k <= thirdNumberMax; k += 2) {
                if (j === 2 || j === 3|| j === 5 || j === 7) {
                    console.log(i + " " + j + " " + k + " ");
                }
            }
        }
    }
}