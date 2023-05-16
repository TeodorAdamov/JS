function agencyProfit(input) {
    let companyName = input[0];
    let adultTicketsCount = Number(input[1]);
    let kidsTicketsCount = Number(input[2]);
    let netAdultTicketPrice = Number(input[3]);
    let tax = Number(input[4]);

    let netKidsTicketPrice = netAdultTicketPrice * 0.3;
    let adultTotalPrice = (netAdultTicketPrice + tax) * adultTicketsCount;
    let kidTotalPrice = (netKidsTicketPrice + tax) * kidsTicketsCount;

    let total = (adultTotalPrice + kidTotalPrice) * 0.2;

    console.log(`The profit of your agency from ${companyName} tickets is ${total.toFixed(2)} lv.`);



}

agencyProfit(['WizzAir', '15', '5', '120', '40'])