function changeBureau(input){
    let bitcoinCount = Number(input[0]);
    let iuanCount = Number(input[1]);
    let commision = Number(input[2]);
    

    let bitcoinInLeva = 1168 * bitcoinCount;
    let iuanInDollars = iuanCount * 0.15;
    let dollarInLv = 1.76;
    let euroInLv = 1.95;
    let iuanInLv = iuanInDollars * dollarInLv;
    let totalLeva = bitcoinInLeva + iuanInLv;
    let LvinEuro = totalLeva / euroInLv;
    let commisionInEuro = LvinEuro * commision / 100;
    let totalEuroAfterCommission = LvinEuro - commisionInEuro;

    console.log(totalEuroAfterCommission.toFixed(2));


    

}

changeBureau(["20", "5678", "2.4"]);
