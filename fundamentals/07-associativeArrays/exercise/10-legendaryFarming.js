function legendaryFarming(data) {

    let dataArray = data.split(' ')
    let farmed = {
        shards: 0,
        fragments: 0,
        motes: 0,
        junk: {}
    }

    for (let i = 0; i < dataArray.length; i += 2) {
        let quant = Number(dataArray[i]);
        let drop = dataArray[i + 1].toLowerCase();


        if (drop !== 'shards' && drop !== 'fragments' && drop !== 'motes') {
            if (farmed.junk.hasOwnProperty(drop)) {
                farmed.junk[drop] += quant;
            } else {
                farmed.junk[drop] = quant;
            }

        } else {
            farmed[drop] += quant;
        }

        if (farmed.shards >= 250) {
            console.log('Shadowmourne obtained!');
            farmed.shards -= 250;
            break;
        } else if (farmed.fragments >= 250) {
            console.log('Valanyr obtained!');
            farmed.fragments -= 250;
            break;
        } else if (farmed.motes >= 250) {
            console.log('Dragonwrath obtained!');
            farmed.motes -= 250;
            break;
        }
    }

    let entries = Object.entries(farmed)//
    let junk = entries.pop();

    entries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(a => console.log(`${a[0]}: ${a[1]}`))

    Object.entries(junk[1])
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(a => console.log(`${a[0]}: ${a[1]}`))

}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')