function solve() {
    const textInput = document.querySelector('#exercise>textarea:nth-child(2)');
    const textOutput = document.querySelector('#exercise>textarea:nth-child(5)');
    const generateButton = document.querySelector('#exercise>button:nth-child(3)');
    const buyButton = document.querySelector('#exercise>button:nth-child(6)');
    const tbodyElement = document.getElementsByTagName('tbody')[0];



    generateButton.addEventListener('click', () => {
        const input = JSON.parse(textInput.value);

        input.forEach(object => {

            const newRow = document.createElement('tr');
            tbodyElement.appendChild(newRow);
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const td5 = document.createElement('td');
            const img = document.createElement('img');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            img.src = object.img;
            td1.appendChild(img);
            newRow.appendChild(td1);

            td2.textContent = object.name;
            newRow.appendChild(td2);

            td3.textContent = object.price;
            newRow.appendChild(td3);

            td4.textContent = object.decFactor;
            newRow.appendChild(td4);

            td5.appendChild(checkbox)
            newRow.appendChild(td5)
        });
    })

    buyButton.addEventListener('click', () => {
        const boughtFurniture = [];
        let totalPrice = 0;
        let decFactor = 0;
        const checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]'));

        checkboxes.forEach(box => {
            if (box.checked) {
                //row[0] = image    row[1] = name   row[2] = price  row[3] = decorationFactor  row[4] = checkbox 

                const row = box.parentElement.parentElement.children
                boughtFurniture.push(row[1].textContent);
                totalPrice += Number(row[2].textContent);
                decFactor += Number(row[3].textContent);
            }
        })

        textOutput.value = `Bought furniture: ${boughtFurniture.join(', ')}\n`
        textOutput.value += `Total price: ${totalPrice.toFixed(2)}\n`
        textOutput.value += `Average decoration factor: ${decFactor / boughtFurniture.length}`
    })

}