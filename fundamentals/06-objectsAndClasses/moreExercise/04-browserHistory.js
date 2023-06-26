function browserHistory(myHistory, array) {

    for (let line of array) {
        if (line === "Clear History and Cache") {
            myHistory['Open Tabs'] = [];
            myHistory['Recently Closed'] = [];
            myHistory['Browser Logs'] = [];
            continue;
        }
        let [command, ...siteName] = line.split(' ');

        if (command === 'Open') {
            myHistory['Open Tabs'].push(siteName.join(' '));
            myHistory['Browser Logs'].push(line)
        } else {
            if (myHistory['Open Tabs'].includes(siteName.join(' '))) {
                let indexToSplice = myHistory['Open Tabs'].indexOf(siteName.join(' '));
                let closedTab = myHistory['Open Tabs'].splice(indexToSplice, 1);
                myHistory['Recently Closed'].push(closedTab);
                myHistory['Browser Logs'].push(line)
            }
        }
    }

    console.log(`${myHistory['Browser Name']}`);
    console.log(`Open Tabs: ${myHistory['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${myHistory['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${myHistory['Browser Logs'].join(', ')}`);
}

browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    [
        "Open Wikipedia",
        "Clear History and Cache",
        "Open Twitter"])