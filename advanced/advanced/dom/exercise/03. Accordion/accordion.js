function toggle() {
    const button = document.getElementsByClassName('button')
    const extra = document.getElementById('extra')

    if (button[0].textContent === 'More') {
        button[0].textContent = 'Less'
        extra.style.display = 'block'
    } else if (button[0].textContent === 'Less') {
        button[0].textContent = 'More'
        extra.style.display = 'none'
    }
}