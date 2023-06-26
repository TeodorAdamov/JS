function employees(data) {

    let employee = {};

    for(let name of data) {
        let number = name.length;
        employee.name = name;
        employee.number = number;
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])