function specialNumbers(input) {
    let number = Number(input[0]);
    let result = '';

    for (let a = 1; a <= 9; a++) {

        if (number % a !== 0) {
            continue;
        }
        for (let b = 1; b <= 9; b++) {


            if (number % b !== 0) {
                continue;
            }


            for (let c = 1; c <= 9; c++) {

                if (number % c !== 0) {
                    continue;
                }
                for (let d = 1; d <= 9; d++) {

                    if (number % d === 0) {
                        result += a + '' + b + c + d + ' ';
                    } else {
                        continue;
                    }

                }

            }

        }
    }
    console.log(result);
}
specialNumbers(["16"])