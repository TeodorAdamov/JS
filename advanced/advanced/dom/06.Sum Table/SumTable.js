function sumTable() {
    const rows = document.querySelectorAll('table tr');
    const sum = document.getElementById('sum');
    let result = 0;

    for (let i = 1; i < rows.length; i++) {
        const cols = rows[i].children;
        const price = cols[cols.length - 1].textContent;
        result += Number(price)
    }
    sum.textContent = result;
}