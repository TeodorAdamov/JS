function kingDjoser(base, increment) {
    let step = 1;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 1;

    for (let curFloor = base; curFloor >= 0; curFloor -= 2){
        if (curFloor === 2){
            gold += 2 * 2 * increment;
            break;
        } else if (curFloor === 1){
            gold += 1 * 1 * increment;
            break;
        }

        stone += (curFloor - 2) * (curFloor - 2) * increment;

        if (step === 5) {
            lapis += (curFloor * 4 - 4) * increment;
            step = 0;
        } else {
            marble += (curFloor * 4 - 4) * increment;
        }
        step++;
        height++;

    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);

}

kingDjoser(23,0.5)