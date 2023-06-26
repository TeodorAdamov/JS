function meetings(data) {

    let myMeetings = {};

    for (let line of data) {
        let [day, name] = line.split(' ');
        if (myMeetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            myMeetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let meeting in myMeetings) {
        console.log(`${meeting} -> ${myMeetings[meeting]}`);
    }
}

meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])

