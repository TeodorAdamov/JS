function bills(input) {
    let months = Number(input[0]);
    let waterBill = 20 * months;
    let internetBill = 15 * months;
    let electricityBill = 0;


    for (let i = 1; i <= months; i++) {
        let currentElectricityBill = Number(input[i]);
        electricityBill += currentElectricityBill;
       

    }
    let others = (electricityBill + waterBill + internetBill) * 1.2;
    let averageBillPerMonth = (electricityBill + waterBill + internetBill + others) / months;
    

    console.log(`Electricity: ${electricityBill.toFixed(2)} lv`);
    console.log(`Water: ${waterBill.toFixed(2)} lv`);
    console.log(`Internet: ${internetBill.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${averageBillPerMonth.toFixed(2)} lv`);

}

bills([
    '8',
'123.54',
'231.54',
'140.23',
'100',
'122.4',
'430',
'178.52',
'64.2'

])