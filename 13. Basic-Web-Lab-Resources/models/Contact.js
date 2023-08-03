// TODO: Create Contact model and export it

class Contact {
    constructor(name, number) {
        this.name = name;
        this._number = number;
    }

    set _number(number) {
        let pattern = /\+359\d{9}/;
        if (number.match(pattern) == null) {
            throw new Error('Invalid Number')
        }
        this.number = number;
    }
}

module.exports = Contact;