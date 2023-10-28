window.addEventListener('load', solve);

function solve() {
    const [carModel, carYear, partName, partNumber] = Array.from(document.querySelectorAll('.container-text input'));

    const condition = document.getElementById('condition');

    const nextButton = document.getElementById('next-btn');

    nextButton.addEventListener('click', (event) => {
        event.preventDefault()
        if (carModel.value && carYear.value && partName.value && partNumber.value && condition.value && Number(carYear.value) >= 1980 && Number(carYear.value) <= 2023) {
            const partInfoUl = document.querySelector('.info-list')
            const li = createElement('li', 'part-content', '', '');
            const article = createElement('article', '', '', '');
            const p1 = createElement('p', '', '', `Car Model: ${carModel.value}`);
            const p2 = createElement('p', '', '', `Car Year: ${carYear.value}`);
            const p3 = createElement('p', '', '', `Part Name: ${partName.value}`);
            const p4 = createElement('p', '', '', `Part Number: ${partNumber.value}`);
            const p5 = createElement('p', '', '', `Condition: ${condition.value}`);
            const editButton = createElement('button', 'edit-btn', '', 'Edit');
            const continueButton = createElement('button', 'continue-btn', '', 'Continue');
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(p3);
            article.appendChild(p4);
            article.appendChild(p5);
            li.appendChild(article);
            li.appendChild(editButton);
            li.appendChild(continueButton);
            partInfoUl.appendChild(li);

            carModel.value = ''; carYear.value = ''; partName.value = ''; partNumber.value = ''; condition.value = '';
            nextButton.setAttribute('disabled', '');


            editButton.addEventListener('click', () => {
                carModel.value = p1.textContent.replace('Car Model: ', '');
                carYear.value = p2.textContent.replace('Car Year: ', '');
                partName.value = p3.textContent.replace('Part Name: ', '');
                partNumber.value = p4.textContent.replace('Part Number: ', '');
                condition.value = p5.textContent.replace('Condition: ', '')
                li.remove();
                nextButton.removeAttribute('disabled');
            })

            continueButton.addEventListener('click', () => {
                const confirmUl = document.querySelector('.confirm-list');
                editButton.remove();
                continueButton.remove();
                const confirmButton = createElement('button', 'confirm-btn', '', 'Confirm');
                const cancelButton = createElement('button', 'cancel-btn', '', 'Cancel');
                li.appendChild(confirmButton);
                li.appendChild(cancelButton);
                confirmUl.appendChild(li);


                cancelButton.addEventListener('click', () => {
                    li.remove();
                    nextButton.removeAttribute('disabled');
                })

                confirmButton.addEventListener('click', () => {
                    const img = document.getElementById('complete-img');
                    const text = document.getElementById('complete-text');
                    li.remove();
                    nextButton.removeAttribute('disabled');
                    img.style.visibility = 'visible';
                    text.textContent = 'Part is Ordered!';
                })
            })
        }
    })


    function createElement(type, htmlClass, htmlId, text) {
        const newElement = document.createElement(type);

        if (htmlClass) {
            newElement.classList.add(htmlClass);
        }

        if (htmlId) {
            newElement.id = htmlId;
        }

        if (text) {
            newElement.textContent = text;
        }
        return newElement;
    }
};




