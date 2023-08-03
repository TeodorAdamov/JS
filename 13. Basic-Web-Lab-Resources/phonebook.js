const Contact = require('./models/Contact');
const fs = require('fs');

let phonebook = JSON.parse(fs.readFileSync('./DB/phoneDB.json', { encoding: 'utf8', flag: 'r' }));

function addContact(data) {
	let newRecord = new Contact(data.name, data.number);
	phonebook.push(newRecord);
	fs.writeFileSync('./DB/phoneDB.json', JSON.stringify(phonebook))
}

function getPhonebook() {
	return phonebook;
}

function deletePhonebook() {
	fs.writeFileSync('./DB/phoneDB.json', '[]')
	return phonebook = [];
}


module.exports = {
	addContact,
	getPhonebook,
	deletePhonebook,
}