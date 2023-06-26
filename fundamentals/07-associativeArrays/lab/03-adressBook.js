function adressBook(data) {

    let myBook = {};

    for(let line of data) {
        let [name, address] = line.split(':');
        myBook[name] = address;
    }
    Object.entries(myBook)
    .sort((a,b) => a[0].localeCompare(b[0]))
    .forEach(x => console.log(`${x[0]} -> ${x[1]}`))
}


adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);

console.log('------------------------');


adressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])