function yardGreening(input){
    let finalPrice = Number(input[0]) * Number(7.61);
    let discount = finalPrice * Number(0.18);
    let finalDiscountedPrice = finalPrice - discount;

    console.log(`The final price is: ${finalDiscountedPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`) 

}

yardGreening(["2000"]);