function cinema(input) {
    let movieType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let totalPrice = 0;
    let totalTickets = rows * columns;

    if (movieType === 'Premiere') {
        totalPrice = totalTickets * 12;
    } else if (movieType === 'Normal'){
        totalPrice = totalTickets * 7.5;
    }   else if (movieType === 'Discount') {
        totalPrice = totalTickets * 5
    }  

    console.log(totalPrice.toFixed(2));
}

cinema(['Premiere', '10', '12']);