function nXnMatrix (n) {
    
    for (let i = 0; i < n; i++) {
        let curLine = ''
        for (let j = 0; j < n; j++) {
            curLine += n + ' '
        }
        console.log(curLine);
    }
}

nXnMatrix(15)