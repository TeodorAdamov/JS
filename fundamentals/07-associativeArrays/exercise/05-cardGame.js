function cardGame(data) {

    let game = {};

    let cardType = {
        S: 4,
        H: 3,
        D: 2,
        C: 1,
    }
    let cardPower = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,

    }
    for (let line of data) {
        let [name, cards] = line.split(': ')

        if (!game.hasOwnProperty(name)) {
            game[name] = [];
        }

        for (let card of cards.split(', ')) {
            if (!game[name].includes(card)) {
                game[name].push(card)
            }
        }
    }

    for (let person in game) {
        let points = 0;
        for (let card of game[person]) {
            let tokens = card.split('');
            let type = tokens.pop();
            let power = tokens.join('');

            let powerTotal = cardPower[power];
            let typeTotal = cardType[type];
            points += powerTotal * typeTotal;
        }
        console.log(`${person}: ${points}`);
    }
}

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
])