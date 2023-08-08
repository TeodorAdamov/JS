function pianist(data) {

    let num = Number(data.shift());
    let pieces = [];

    for (let i = 0; i < num; i++) {
        let [piece, composer, key] = data.shift().split('|');
        let curPiece = {
            name: piece,
            composer,
            key,
        }
        pieces.push(curPiece);
    }

    for (let line of data) {
        if (line === 'Stop') {
            break;
        }

        if (line.includes('Add')) {
            let [command, piece, composer, key] = line.split('|');
            let isExisting = pieces.find(a => a.name === piece);
            if (isExisting) {
                console.log(`${piece} is already in the collection!`);
            } else {
                let curPiece = {
                    name: piece,
                    composer,
                    key,
                }
                pieces.push(curPiece);
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (line.includes('Remove')) {
            let [command, piece] = line.split('|');
            let isExisting = pieces.find(a => a.name === piece);
            if (isExisting) {
                pieces.splice(pieces.indexOf(isExisting), 1)
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (line.includes('ChangeKey')) {
            let [command, piece, key] = line.split('|')
            let isExisting = pieces.find(a => a.name === piece);

            if (isExisting) {
                isExisting.key = key;
                console.log(`Changed the key of ${piece} to ${key}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    pieces.forEach(piece => {
        console.log(`${piece.name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
    })
}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)