function users(data) {

    let userList = {};

    for (let line of data) {
        let [company, userId] = line.split(' -> ');

        if (!userList.hasOwnProperty(company)) {
            userList[company] = [];
        }
        if (!userList[company].includes(userId)) {
            userList[company].push(userId)
        }
    }

    Object.entries(userList)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(a => {
            console.log(a[0]);
            a[1].forEach(b => console.log(`-- ${b}`))
        })
}

users([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])