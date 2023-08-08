function mirrorWords(data) {

    let pattern = /([@#])(?<words>[A-Za-z]{3,}\1\1[A-Za-z]{3,})\1/g

    let match = pattern.exec(data);
    let pairs = 0;
    let mirrored = [];

    while (match !== null) {
        pairs++;
        let wordsArr = match.groups.words.split(/##|@@/);
        if (wordsArr[1].split('').reverse().join('') === wordsArr[0]) {
            let result = `${wordsArr[0]} <=> ${wordsArr[1]}`;
            mirrored.push(result);
        }
        match = pattern.exec(data);
    }

    if (pairs === 0) {
        console.log('No word pairs found!');
        console.log('No mirror words!');
    } else if (pairs > 0) {
        console.log(`${pairs} word pairs found!`);
        if (mirrored.length > 0) {
            console.log('The mirror words are:');
            console.log(mirrored.join(', '));
        } else {
            console.log('No mirror words!');
        }
    }
}

mirrorWords(
    [
        '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
        ]
        

)