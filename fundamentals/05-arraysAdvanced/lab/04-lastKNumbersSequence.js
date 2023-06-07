function lastKSequence(n, k) {
    let array = [1];

    for (let i = 0; i < n - 1; i++) {
        let lastK = array.slice(-k);
        let sum = 0
        for (let j = 0; j < lastK.length; j++) {
            sum += lastK[j];
        }

        array.push(sum)
    }

    console.log(array.join(" "));
}

lastKSequence(8, 2)