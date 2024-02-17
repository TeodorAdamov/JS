function loadingBar(num) {
    if (num === 100) {
        return '100% Complete!\n[%%%%%%%%%%]';
    }
    let arr = Array(10).fill('.')

    for (let i = 0; i < num / 10; i++) {
        arr[i] = '%';
    }
    return `${num}% [${arr.join('')}]\nStill loading...`;


}

console.log(loadingBar(60))