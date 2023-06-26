function schoolGrades(data) {

    let average = (arr) => {
        let sum = arr.reduce((a, b) => Number(a) + Number(b));
        return sum / arr.length;
    }

    let myStudents = new Map()

    for (let line of data) {
        let [name, ...grades] = line.split(' ');
        grades.map(Number);

        if (!myStudents.has(name)) {
            myStudents.set(name, [])
        }
        grades.forEach(x => {
            let value = myStudents.get(name);
            value.push(x)
        })
    }

    Array.from(myStudents.entries())
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(a => console.log(`${a[0]}: ${average(a[1]).toFixed(2)}`))
}

schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])