// · Брой пакети химикали - цяло число в интервала [0...100]
// · Брой пакети маркери - цяло число в интервала [0...100]
// · Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// · Процент намаление - цяло число в интервала [0...100]

function suppliesForSchool(input) {
    let penPacketsCount = Number(input[0]);
    let markerPacketsCount = Number(input[1]);
    let cleanerLitres = Number(input[2]);
    let discountPercent = Number(input[3]) / 100;
    
    let penPrice = penPacketsCount * 5.80;
    let markerPrice = markerPacketsCount * 7.20;
    let cleanerPrice = cleanerLitres * 1.20;
    let finalPrice = penPrice + markerPrice + cleanerPrice;
    let finalPriceWithDiscount = finalPrice - (finalPrice * discountPercent);
    console.log(finalPriceWithDiscount);


}


suppliesForSchool(["2","3","4","25"]);