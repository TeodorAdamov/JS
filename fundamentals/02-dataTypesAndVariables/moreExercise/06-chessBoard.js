function chessBoard(n) {
    let curColor = 'black';
    let prevColor = ''

    console.log('<div class="chessboard">');
    for (let i = 1; i <= n; i++) {
        console.log(' <div>');
        for (let j = 1; j <= n; j++) {
            console.log(` <span class="${curColor}"></span>`);
            prevColor = curColor;
            curColor = prevColor === 'black' ? 'white' : 'black'
        }
        console.log(' </div>');
        if (n % 2 === 0) { 
            prevColor = curColor;
            curColor = prevColor === 'black' ? 'white' : 'black'
        }
    }
    console.log('</div>');
}

chessBoard(4)