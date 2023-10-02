function validate() {
    const input = document.getElementById('email');

    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/

    input.addEventListener('change', () => {
        if (input.value.match(pattern) === null) {
            input.className = 'error'
        } else {
            input.className = '';
        }
    })
}