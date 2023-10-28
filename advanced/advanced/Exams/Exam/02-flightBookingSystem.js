class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const isExisting = this.flights.find(flight => flight.flightNumber === flightNumber);

        if (isExisting) {
            return `Flight ${flightNumber} to ${destination} is already available.`
        }

        const myFlight = {
            flightNumber,
            destination,
            departureTime,
            price: Number(price)
        }
        this.flights.push(myFlight);

        return `Flight ${flightNumber} to ${destination} has been added to the system.`
    }

    bookFlight(passengerName, flightNumber) {
        const isExisting = this.flights.find(flight => flight.flightNumber === flightNumber);

        if (!isExisting) {
            return `Flight ${flightNumber} is not available for booking.`
        }

        const booking = {
            passengerName,
            flightNumber,
            price: isExisting.price,
        }
        this.bookings.push(booking);
        this.bookingsCount++;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
    }

    cancelBooking(passengerName, flightNumber) {
        const isExisting = this.bookings.find(booking => booking.flightNumber === flightNumber);

        if (!isExisting) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        }

        this.bookings.splice(this.bookings.indexOf(isExisting), 1);
        this.bookingsCount--;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
    }

    showBookings(criteria) {
        if (this.bookings.length === 0) {
            throw new Error('No bookings have been made yet.')
        }

        if (criteria === 'all') {
            const result = [`All bookings(${this.bookingsCount}):`];
            this.bookings.forEach(booking => {
                result.push(`${booking.passengerName} booked for flight ${booking.flightNumber}.`)
            })
            return result.join('\n');
        }

        if (criteria === 'cheap') {
            const cheapFlights = this.bookings.filter(el => el.price <= 100);
            if (cheapFlights.length === 0) {
                return "No cheap bookings found."
            }

            const result = ['Cheap bookings:'];
            cheapFlights.forEach(flight => {
                result.push(`${flight.passengerName} booked for flight ${flight.flightNumber}.`)
            })
            return result.join('\n');
        }

        if (criteria === 'expensive') {
            const expensiveFlights = this.bookings.filter(el => el.price > 100);
            if (expensiveFlights.length === 0) {
                return "No expensive bookings found."
            }

            const result = ['Expensive bookings:'];
            expensiveFlights.forEach(flight => {
                result.push(`${flight.passengerName} booked for flight ${flight.flightNumber}.`)
            })
            return result.join('\n');
        }
    }
}


const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));
