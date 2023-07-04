function armies(data) {

    let battleground = {};

    for (let line of data) {

        if (line.includes('arrives')) {
            let leaderName = line.replace(' arrives', '');
            battleground[leaderName] = {
                totalArmy: 0
            };

        } else if (line.includes('defeated')) {
            let defeatedLeader = line.replace(' defeated', '');
            if (battleground.hasOwnProperty(defeatedLeader)) {
                delete battleground[defeatedLeader];
            }

        } else if (line.includes(': ')) {
            let [leaderName, rest] = line.split(': ');
            let [armyName, armyCount] = rest.split(', ');


            if (battleground.hasOwnProperty(leaderName)) {
                battleground[leaderName][armyName] = Number(armyCount);
                battleground[leaderName].totalArmy += Number(armyCount);
            }

        } else {
            let [armyName, armyCount] = line.split(' + ');

            for (let leader in battleground) {
                if (battleground[leader].hasOwnProperty(armyName)) {
                    battleground[leader][armyName] += Number(armyCount);
                    battleground[leader].totalArmy += Number(armyCount);
                }
            }
        }

    }
    Object.entries(battleground)
        .sort((a, b) => b[1].totalArmy - a[1].totalArmy)
        .forEach(element => {
            console.log(`${element[0]}: ${element[1].totalArmy}`);
            delete element[1].totalArmy
            Object.entries(element[1])
                .sort((c, d) => d[1] - c[1])
                .forEach(el => console.log(`>>> ${el[0]} - ${el[1]}`))
        });
}

armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])