function schoolCamp(input){
    let season = input[0];
    let groupType = input[1];
    let studentsCount = Number(input[2]);
    let nightsCount = Number(input[3]);
    let price = 0;
    let sport = '';


    switch(season){
        case 'Winter':
            switch (groupType){
                case 'boys':
                    price = studentsCount * nightsCount * 9.6;
                    sport = 'Judo';
                    break;
                case 'girls':
                    price = studentsCount * nightsCount * 9.6;
                    sport = 'Gymnastics';
                    break;
                case 'mixed':
                    price = studentsCount * nightsCount * 10;
                    sport = 'Ski'
                    break;
            }
            break;
        case 'Spring':
            switch (groupType){
                case 'boys':
                    price = studentsCount * nightsCount * 7.2;
                    sport = 'Tennis';
                    break;
                case 'girls':
                    price = studentsCount * nightsCount * 7.2;
                    sport = 'Athletics';
                    break;
                case 'mixed':
                    price = studentsCount * nightsCount * 9.5;
                    sport = 'Cycling'
                    break;
            }
            break;
        case 'Summer':
            switch (groupType){
                case 'boys':
                    price = studentsCount * nightsCount * 15;
                    sport = 'Football';
                    break;
                case 'girls':
                    price = studentsCount * nightsCount * 15;
                    sport = 'Volleyball';
                    break;
                case 'mixed':
                    price = studentsCount * nightsCount * 20;
                    sport = 'Swimming'
                    break;
            }
            break;
    }

    if (studentsCount >= 50){
        price *= 0.5;
    } else if (studentsCount >= 20 && studentsCount < 50){
        price *= 0.85;
    } else if (studentsCount >= 10 && studentsCount < 20) {
        price *= 0.95;
    }
    console.log(`${sport} ${price.toFixed(2)} lv.`);

}

schoolCamp(['Winter', 'mixed', '9', '15']);