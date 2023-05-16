function basketballEquipment(input) {
    let oneYearPrice = Number(input[0]);
    let sneakersPrice = oneYearPrice * 0.6;
    let suitPrice = sneakersPrice * 0.8;
    let ballPrice = suitPrice * 0.25;
    let accesoryPrice = ballPrice * 0.2;

    let finalPrice = oneYearPrice + sneakersPrice + suitPrice + ballPrice + accesoryPrice

    console.log(finalPrice);

}

basketballEquipment(["365 "]);