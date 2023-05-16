function theatre(day, age) {
    let price = 0;
    if (age >= 0 && age <= 122) {
        switch (day) {
            case 'Weekday':
                if (age > 18 && age <= 64) {
                    price += 18;
                } else {
                    price += 12;
                }
                break;
            case 'Weekend':
                if (age > 18 && age <= 64) {
                    price += 20;
                } else {
                    price += 15;
                }
                break;
            case 'Holiday':
                if (age >= 0 && age <= 18) {
                    price += 5;
                } else if (age > 18 && age <= 64) {
                    price += 12;
                } else {
                    price += 10;
                }
                break;
                
        }
    } else {
        console.log('Error!');
    }
    if (price > 0 ){
        console.log(price + '$');
    }
}

 theatre('Weekend', -4187678)
