window.addEventListener('load', solve);


function solve() {
    const [name, email, contactNumber] = Array.from(document.querySelectorAll('.container-text input'));
    const [classType, classTime] = Array.from(document.querySelectorAll('.container-text select'));
    const nextButton = document.getElementById('next-btn');

    nextButton.addEventListener('click', (event) => {
        event.preventDefault()
        if (name.value && email.value && contactNumber.value && classType.value && classTime.value) {
            const previewUl = document.querySelector('.class-info')
            const li = createElement('li', 'info-item', '', '');
            const article = createElement('article', 'personal-info', '', '');
            const p1 = createElement('p', '', '', `${name.value}`);
            const p2 = createElement('p', '', '', `${email.value}`);
            const p3 = createElement('p', '', '', `${contactNumber.value}`);
            const p4 = createElement('p', '', '', `${classType.value}`);
            const p5 = createElement('p', '', '', `${classTime.value}`);
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
            previewUl.appendChild(li);
            name.value = ''; email.value = ''; contactNumber.value = ''; classType.value = ''; classTime.value = '';
            nextButton.setAttribute('disabled', '');

            editButton.addEventListener('click', () => {
                name.value = p1.textContent;
                email.value = p2.textContent;
                contactNumber.value = p3.textContent;
                classType.value = p4.textContent;
                classTime.value = p5.textContent
                li.remove();
                nextButton.removeAttribute('disabled');
            })

            continueButton.addEventListener('click', () => {
                const confirmUl = document.querySelector('.confirm-class');
                li.classList.remove('info-item');
                li.classList.add('continue-info');
                editButton.remove();
                continueButton.remove();
                const cancelButton = createElement('button', 'cancel-btn', '', 'Cancel');
                const confirmButton = createElement('button', 'confirm-btn', '', 'Confirm');
                li.appendChild(cancelButton);
                li.appendChild(confirmButton);
                confirmUl.appendChild(li);


                cancelButton.addEventListener('click', () => {
                    li.remove();
                    nextButton.removeAttribute('disabled');
                })

                confirmButton.addEventListener('click', () => {
                    const mainDiv = document.getElementById('main');
                    const body = document.getElementById('body');
                    mainDiv.remove();

                    const h1 = createElement('h1','','thank-you',"Thank you for scheduling your appointment, we look forward to seeing you!")
                    const doneButton = createElement('button', '','done-btn','Done');
                    body.appendChild(h1);
                    body.appendChild(doneButton);
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

}




