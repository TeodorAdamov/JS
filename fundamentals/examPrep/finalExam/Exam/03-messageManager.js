function messageManager(data) {
    let capacity = Number(data.shift());

    let records = [];

    for (let line of data) {
        if (line === 'Statistics') {
            break;
        }

        if (line.includes('Add')) {
            let [_, username, sent, received] = line.split('=');
            let isExisting = records.find(person => person.name === username)

            if (!isExisting) {
                let user = {
                    name: username,
                    sent: Number(sent),
                    received: Number(received)
                }
                records.push(user);
            }

        } else if (line.includes('Message')) {
            let [_, sender, receiver] = line.split('=');
            let isSenderExisting = records.find(person => person.name === sender);
            let isReceiverExisting = records.find(person => person.name === receiver);

            if (isSenderExisting && isReceiverExisting) {
                isSenderExisting.sent += 1;
                isReceiverExisting.received += 1;
                if ((isSenderExisting.sent + isSenderExisting.received) >= capacity) {
                    let index = records.indexOf(isSenderExisting)
                    records.splice(index, 1)
                    console.log(`${sender} reached the capacity!`);
                }
                if ((isReceiverExisting.sent + isReceiverExisting.received) >= capacity) {
                    let index = records.indexOf(isReceiverExisting);
                    records.splice(index, 1);
                    console.log(`${receiver} reached the capacity!`);
                }
            }


        } else if (line.includes('Empty')) {
            let [_, username] = line.split('=');
            let isExisting = records.find(person => person.name === username);
            if (username === 'All') {
                records = [];
                continue;
            }
            if (isExisting) {
                let index = records.indexOf(isExisting);
                records.splice(index, 1);
            }
        }
    }
    console.log(`Users count: ${records.length}`);
    records.forEach(record => {
        console.log(`${record.name} - ${record.sent + record.received}`);
    })
}

messageManager(["20",

    "Add=All=3=9",

    "Add=Berry=5=5",

    "Add=Clark=4=0",

    "Empty=Berry",

    "Add=Blake=9=3",

    "Add=Michael=3=16",

    "Add=Amy=9=9",

    "Message=Blake=Amy",

    "Empty=All",

    "Message=Michael=Amy",

    "Statistics"])