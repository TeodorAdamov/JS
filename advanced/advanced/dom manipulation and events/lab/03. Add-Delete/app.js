function addItem() {
    const list = document.getElementById('items');
    const input = document.getElementById('newItemText').value;


    const li = document.createElement('li');
    li.textContent = input;


    const deleteButton = document.createElement('a');
    deleteButton.href = '#'
    deleteButton.textContent = '[Delete]'

    li.appendChild(deleteButton)
    list.appendChild(li)

    deleteButton.addEventListener('click', deleteElement)

    function deleteElement (event) {
        event.target.parentElement.remove()
    }
}