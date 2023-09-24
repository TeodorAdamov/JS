function lockedProfile() {
    const buttonElements = Array.from(document.getElementsByTagName('button'));

    buttonElements.forEach(button => {
        button.addEventListener('click', (event) => {
            const currentUser = event.target.parentElement;
            const isLocked = currentUser.querySelector('input[value=lock]').checked;
            const hiddenInfo = currentUser.querySelector('div');

            if (event.target.textContent === 'Show more' && isLocked === false) {
                hiddenInfo.style.display = 'block';
                event.target.textContent = 'Hide it'

            } else if (event.target.textContent === 'Hide it' && isLocked === false) {
                hiddenInfo.style.display = 'none';
                event.target.textContent = 'Show more'
            }
        })
    })
}