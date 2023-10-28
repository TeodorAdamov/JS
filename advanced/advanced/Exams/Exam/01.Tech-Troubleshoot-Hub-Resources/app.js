window.addEventListener('load', solution);

function solution() {
    const [employee, description] = Array.from(document.querySelectorAll('form input'));
    const [category, urgency, team] = Array.from(document.querySelectorAll('form select'));
    const addButton = document.getElementById('add-btn');

    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (employee.value && description.value && category.value && urgency.value && team.value) {
            const previewUl = document.querySelector('.preview-list');
            const form = document.querySelector('form');
            const li = createElement('li', 'problem-content', '');
            const article = createElement('article', '', '');
            const p1 = createElement('p', '', `From: ${employee.value}`);
            const p2 = createElement('p', '', `Category: ${category.value}`);
            const p3 = createElement('p', '', `Urgency: ${urgency.value}`);
            const p4 = createElement('p', '', `Assigned to: ${team.value}`);
            const p5 = createElement('p', '', `Description: ${description.value}`);
            const editButton = createElement('button', 'edit-btn', 'Edit');
            const continueButton = createElement('button', 'continue-btn', 'Continue');
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(p3);
            article.appendChild(p4);
            article.appendChild(p5);
            li.appendChild(article);
            li.appendChild(editButton);
            li.appendChild(continueButton);
            previewUl.appendChild(li);
            form.reset();
            addButton.setAttribute('disabled', '');


            editButton.addEventListener('click', () => {
                employee.value = p1.textContent.replace('From: ', '');
                category.value = p2.textContent.replace('Category: ', '');
                urgency.value = p3.textContent.replace('Urgency: ', '');
                team.value = p4.textContent.replace('Assigned to: ', '');
                description.value = p5.textContent.replace('Description: ', '');
                addButton.removeAttribute('disabled', '');
                li.remove();
            })

            continueButton.addEventListener('click', () => {
                const pendingUl = document.querySelector('.pending-list');
                const resolveButton = createElement('button', 'resolve-btn', 'Resolved');
                editButton.remove();
                continueButton.remove();
                li.appendChild(resolveButton);
                pendingUl.appendChild(li);


                resolveButton.addEventListener('click', () => {
                    const resolvedUl = document.querySelector('.resolved-list');
                    const clearButton = createElement('button', 'clear-btn', 'Clear');
                    resolveButton.remove();
                    li.appendChild(clearButton);
                    resolvedUl.appendChild(li);


                    clearButton.addEventListener('click', () => {
                        li.remove();
                    })
                })

            })
        }
    })

    function createElement(type, htmlClass, text) {
        const newElement = document.createElement(type);

        if (htmlClass) {
            newElement.classList.add(htmlClass);
        }

        // if (htmlId) {
        //     newElement.id = htmlId;
        // }

        if (text) {
            newElement.textContent = text;
        }
        return newElement;
    }
}




