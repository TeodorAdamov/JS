function tickets(arr, str) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    const myTickets = [];

    arr.forEach(element => {
        const [destination, price, status] = element.split("|");
        const ticket = new Ticket(destination, price, status);

        myTickets.push(ticket);
    });

    let sortedTickets = [];

    if (str === 'price') {
        sortedTickets = myTickets.sort((a, b) => a[str] - b[str])
    } else {
        sortedTickets = myTickets.sort((a, b) => a[str].localeCompare(b[str]))
    }


    return sortedTickets
}

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
))