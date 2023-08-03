const addButton = document.getElementById('add');
const number = document.getElementById('number').value;
const deleteButton = document.getElementById('delete');

addButton.addEventListener('click', function onclick(event) {
    let pattern = /\+359\d{9}/;
    if (number.match(pattern) == null) {
        window.alert('Invalid Number');
    }
})




