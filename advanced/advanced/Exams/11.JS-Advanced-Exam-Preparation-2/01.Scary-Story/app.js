window.addEventListener("load", solve);

function solve() {
    const [firstName, lastName, age, storyTitle] = Array.from(document.querySelectorAll('.inner-wrap input'));
    const genre = document.getElementById('genre');
    const story = document.getElementById('story');
    const publishButton = document.getElementById('form-btn');

    publishButton.addEventListener('click', (event) => {
        event.preventDefault();

        if (firstName.value && lastName.value && age.value && storyTitle.value && story.value) {
            const form = document.querySelector('form');
            const previewUl = document.getElementById('preview-list');
            const li = createElement('li', 'story-info', '');
            const article = createElement('article', '', '');
            const h4 = createElement('h4', '', `Name: ${firstName.value} ${lastName.value}`);
            const p1 = createElement('p', '', `Age: ${age.value}`);
            const p2 = createElement('p', '', `Title: ${storyTitle.value}`);
            const p3 = createElement('p', '', `Genre: ${genre.value}`);
            const p4 = createElement('p', '', `${story.value}`);
            const saveButton = createElement('button', 'save-btn', 'Save Story');
            const editButton = createElement('button', 'edit-btn', 'Edit Story');
            const deleteButton = createElement('button', 'delete-btn', 'Delete Story');
            article.appendChild(h4);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(p3);
            article.appendChild(p4);
            li.appendChild(article);
            li.appendChild(saveButton);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            previewUl.appendChild(li);
            form.reset();
            publishButton.setAttribute('disabled', '');


            editButton.addEventListener('click', () => {
                [firstName.value, lastName.value] = h4.textContent.replace('Name: ', '').split(' ');
                age.value = p1.textContent.replace('Age: ', '');
                storyTitle.value = p2.textContent.replace('Title: ', '');
                story.value = p4.textContent;
                publishButton.removeAttribute('disabled', '');
                li.remove();
            })

            saveButton.addEventListener('click', () => {
                const mainDiv = document.getElementById('main');
                const storyDiv = document.querySelector('.form-wrapper');
                const previewDiv = document.getElementById('side-wrapper');
                storyDiv.remove();
                previewDiv.remove();
                mainDiv.appendChild(createElement('h1', '', 'Your scary story is saved!'));

            })

            deleteButton.addEventListener('click', () => {
                li.remove();
                publishButton.removeAttribute('disabled', '');
            })
        }
    })

    function createElement(type, htmlClass, text) {
        const newElement = document.createElement(type);

        if (htmlClass) {
            newElement.classList.add(htmlClass);
        }

        if (text) {
            newElement.textContent = text;
        }
        return newElement;
    }
}
