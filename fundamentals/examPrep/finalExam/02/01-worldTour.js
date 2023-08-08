function worldTour(data) {

    let string = data.shift();

    for (let line of data) {
        if (line === 'Travel') {
            break;
        }

        if (line.includes('Add Stop')) {
            let [_, index, stop] = line.split(':');
            index = Number(index)
            if (index >= 0 && index < string.length) {
                string = string.slice(0, index) + stop + string.slice(index);
            }

        } else if (line.includes('Remove Stop')) {
            let [_, startIndex, endIndex] = line.split(':');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);

            if ((startIndex >= 0 && startIndex < string.length) && (endIndex >= 0 && endIndex < string.length)) {
                string = string.slice(0, startIndex) + string.slice(endIndex + 1);
            }

        } else if (line.includes('Switch')) {
            let [_, oldString, newString] = line.split(':');
            let regex = new RegExp(`${oldString}`, 'g')
            string = string.replace(regex, newString);
           
        }
        console.log(string);
    }
    console.log(`Ready for world tour! Planned stops: ${string}`);
}

worldTour(["Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])

