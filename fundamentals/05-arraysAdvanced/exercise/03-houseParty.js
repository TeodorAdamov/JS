function houseParty(array) {

    let guests = []

    for (let i = 0; i < array.length; i++) {
        let curGuestArray = array[i].split(" ");
        let guestName = curGuestArray.shift();
        let command = curGuestArray.join(" ")

        if (command === "is going!") {
            if (guests.includes(guestName)) {
                console.log(`${guestName} is already in the list!`);
            } else {
                guests.push(guestName)
            }
        } else if (command === 'is not going!') {
            if (guests.includes(guestName)) {
                let toSplice = guests.indexOf(guestName);
                guests.splice(toSplice, 1)
            } else {
                console.log(`${guestName} is not in the list!`);
            }
        }


    }
    console.log(guests.join('\n'));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])