function deleteByEmail() {
    const inputEmail = document.querySelector('label [name=email]').value;
    const tableArr = Array.from(document.querySelectorAll('tbody tr'));
    const result = document.getElementById('result')

    const match = tableArr.find(row => row.children[1].textContent === inputEmail);

    let isDeleted = false;
    if (match) {
        match.remove()
        isDeleted = true;
    }

    if (isDeleted) {
        result.textContent = 'Deleted.'
    } else {
        result.textContent = 'Not found.'
    }
}