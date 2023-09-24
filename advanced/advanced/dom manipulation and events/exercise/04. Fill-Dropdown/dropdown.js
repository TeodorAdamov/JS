function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    //create option element
    const options = document.createElement('option');

    //set option text and value
    options.textContent = newItemText.value;
    options.value = newItemValue.value;

    
    //append new option to menu

    menu.appendChild(options);


    //clear inputs

    newItemText.value = '';
    newItemValue.value = '';

}