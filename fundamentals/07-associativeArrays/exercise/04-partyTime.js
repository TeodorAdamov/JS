function partyTime(data) {

    let myParty = {
        regular: [],
        VIP: [],
    };

    let partyIndex = data.indexOf('PARTY');
    let guestList = data.splice(0, partyIndex)
    for (let guest of guestList) {
        if (Number(guest[0])) {
            myParty.VIP.push(guest)
        } else {
            myParty.regular.push(guest)
        }
    }
    data.shift();

    for (let guest of data) {

        if (myParty.regular.includes(guest)) {
            let indexToSplice = myParty.regular.indexOf(guest);
            myParty.regular.splice(indexToSplice, 1);
        } else if (myParty.VIP.includes(guest)) {
            let indexToSplice = myParty.VIP.indexOf(guest);
            myParty.VIP.splice(indexToSplice, 1);
        }
    }
    console.log(myParty.regular.length + myParty.VIP.length);
    for (let vip of myParty.VIP) {
        console.log(vip);
    }
    for (let regular of myParty.regular) {
        console.log(regular);
    }
}

partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]


)