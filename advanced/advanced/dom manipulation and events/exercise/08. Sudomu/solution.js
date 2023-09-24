function solve() {
    const quickCheckButton = document.querySelector('#exercise>table>tfoot>tr>td>button:nth-child(1)');
    const clearButton = document.querySelector('#exercise>table>tfoot>tr>td>button:nth-child(2)');
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const table = document.getElementsByTagName('table')[0];
    const output = document.querySelector('#check>p');


    let isSudoku = true;

    quickCheckButton.addEventListener('click', () => {
        rows.forEach((row, i) => {
            const rowCells = Array.from(row.children);
            const rowElements = new Set();
            const colElements = new Set();

            debugger
            rowCells.forEach(cell => {
                rowElements.add(cell.children[0].value);
            })


            rows.forEach((row, j) => {
                const col = rows[j].children;
                const cellData = col[i].children[0].value;
                colElements.add(cellData);
            })

            if (rowElements.size < rows.length || colElements.size < rows.length) {
                isSudoku = false;
            }
        })

        if (isSudoku) {
            table.style.border = '2px solid green'
            output.textContent = "You solve it! Congratulations!"
            output.style.color = 'green'
        } else {
            table.style.border = '2px solid red'
            output.textContent = "NOP! You are not done yet..."
            output.style.color = 'red'
        }
    })

    clearButton.addEventListener('click', () => {
        rows.forEach(row => {
            const rowCells = Array.from(row.children);


            rowCells.forEach(cell => {
                cell.children[0].value = '';
            })
        })

        table.style.border = 'none'
        output.textContent = ''
        
    })
}