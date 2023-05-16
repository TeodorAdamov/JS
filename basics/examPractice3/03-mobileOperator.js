function mobileOperator(input) {
    let duration = input[0];
    let type = input[1];
    let internet = input[2];
    let monthsToPay = Number(input[3]);
    let total = 0;

    switch (duration) {
        case 'one':
            switch (type){
                case 'Small':
                    internet === 'yes' ? total += 5.5 : total;
                    total += 9.98
                    break;
                case 'Middle':
                    internet === 'yes' ? total += 4.35 : total;
                    total += 18.99
                    break;
                case 'Large':
                    internet === 'yes' ? total += 4.35 : total;
                    total += 25.98
                    break;
                case 'ExtraLarge':
                    internet === 'yes' ? total += 3.85 : total;
                    total += 35.99
                    break;
            }
            break;
        case 'two':
            switch (type){
                case 'Small':
                    internet === 'yes' ? total += 5.5 : total;
                    total += 8.58
                    total *= 0.9625;
                    break;
                case 'Middle':
                    internet === 'yes' ? total += 4.35 : total;
                    total += 17.09
                    total *= 0.9625;
                    break;
                case 'Large':
                    internet === 'yes' ? total += 4.35 : total;
                    total += 23.59
                    total *= 0.9625;
                    break;
                case 'ExtraLarge': 
                    internet === 'yes' ? total += 3.85 : total;
                    total += 31.79
                    total *= 0.9625;
                    break;
            }
            break;
    }
    console.log(`${(total * monthsToPay).toFixed(2)} lv.`);

}

mobileOperator(['one', 'Small', 'yes', '10']);