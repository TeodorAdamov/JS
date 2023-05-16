function fitnessCard(input) {
    let money = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sportType = input[3];
    let price = 0;

    switch (gender) {
        case "m":
            switch (sportType) {
                case "Gym":
                    price += 42; break;
                case "Boxing":
                    price += 41; break;
                case "Yoga":
                    price += 45; break;
                case "Zumba":
                    price += 34; break;
                case "Dances":
                    price += 51; break;
                case "Pilates":
                    price += 39; break;
            } break;
        case "f":
            switch (sportType) {
                case "Gym":
                    price += 35; break;
                case "Boxing":
                    price += 37; break;
                case "Yoga":
                    price += 42; break;
                case "Zumba":
                    price += 31; break;
                case "Dances":
                    price += 53; break;
                case "Pilates":
                    price += 37; break;
            } break;
    }
    if (age <= 19){
        price = price * 0.8;
    }
    if (price >= money){
        let moneyNeeded = price - money;
        console.log(`You don't have enough money! You need $${moneyNeeded.toFixed(2)} more.`);
    } else {
        console.log(`You purchased a 1 month pass for ${sportType}.`);
    }

}
    fitnessCard(["20", "f", "15", "Yoga"]);