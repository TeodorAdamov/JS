const addButton = document.getElementById('add');
const num = document.getElementById('number');
const deleteButton = document.getElementById('delete');


addButton.addEventListener('click', function onclick(event) {
    let pattern = /\+359\d{9}/;
    debugger
    if (num.value.match(pattern) === null) {
        window.alert('Invalid Number');
    }
})


deleteButton.addEventListener('click', function onclick(){
    window.confirm('Are you sure')
})




