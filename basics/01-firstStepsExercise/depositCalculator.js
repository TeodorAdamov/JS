function depositCalculator(input){
    let depositedSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestPercent = Number(input[2]) / Number(100);

    // сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
     
    let sum = depositedSum + depositPeriod * ((depositedSum * annualInterestPercent) / 12);
    console.log(sum);
}

depositCalculator(["2350", "6", "7"]);