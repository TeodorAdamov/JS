function destinationMapper(data) {
    let pattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g

    let match = pattern.exec(data)
    let locations = []
    let points = 0;

    while (match !== null) {
        locations.push(match.groups.location)
        match = pattern.exec(data)
    }
    
    points = locations.reduce((sum,current) => sum + current.length, 0);

    console.log(`Destinations: ${locations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}

destinationMapper('=Hawai=/Cyprus=Invalid/invalid==i5valid=/I5valid/=i=')