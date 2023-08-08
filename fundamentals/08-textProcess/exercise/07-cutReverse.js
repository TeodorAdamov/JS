function cutAndReverse(string) {

    const half = string.substring(0, string.length / 2)
        .split('')
        .reverse()
        .join('');

    const secondHalf = string.substring(string.length / 2)
        .split('')
        .reverse()
        .join('')

    console.log((half));
    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')