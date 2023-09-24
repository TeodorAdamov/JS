function validate() {
    const input = document.getElementById('email');

    input.addEventListener('change', regex)

    function regex() {
        debugger
        const pattern = /^[a-z]+\@(?<grp>[a-z]+\.[a-z]+)$/
        const match = input.value.match(pattern)

        if (match) {
            input.classList.remove('error')
        } else {
            input.classList.add('error')
        }
    }
}