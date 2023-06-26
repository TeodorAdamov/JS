function wordTrack(data) {

    let wordsToTrackFor = data.shift().split(' ');
    let tracker = {};

    for (let word of wordsToTrackFor) {
        tracker[word] = 0
    }

    for (let word of data) {
        for (let key in tracker) {
            if (word === key) {
                tracker[word]++;
            }
        }
    }
    Object.keys(tracker)
        .sort((a, b) => tracker[b] - tracker[a])
        .forEach(x => console.log(`${x} - ${tracker[x]}`))
}

wordTrack([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])