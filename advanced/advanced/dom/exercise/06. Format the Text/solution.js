function solve() {
    const textArea = document.getElementById('input').value;
    const output = document.getElementById('output')

    const textArr = textArea.split('.')
    const filtered = textArr.filter(el => !!el)

    while (filtered.length > 0) {
        const result = filtered.splice(0, 3).join('. ') + '.';
        const p = document.createElement('p')
        p.textContent = result;
        output.appendChild(p);
    }
}