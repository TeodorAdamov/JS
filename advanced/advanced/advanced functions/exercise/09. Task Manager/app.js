function solve() {
    const addButton = document.getElementById('add');
    const [_, section2, section3, section4] = Array.from(document.querySelectorAll('section'));
    console.log('DOM LOADED');

    addButton.addEventListener('click', (event) => {
        event.preventDefault()
        const task = document.getElementById('task');
        const description = document.getElementById('description');
        const dueDate = document.getElementById('date');
        const orangeDiv = document.querySelector('.wrapper>section:nth-child(2)>div:nth-child(2)')

        //early return if values are empty
        if (!task.value || !description.value || !dueDate.value) {
            return
        }

        //create article element
        const article = document.createElement('article')

        article.innerHTML = `
        <h3>${task.value}</h3>
            <p>Description: ${description.value}</p>
            <p>Due Date: ${dueDate.value}</p>
            <div class="flex">
                <button class="green">Start</button>
                <button class="red">Delete</button>
            </div>
        `

        orangeDiv.appendChild(article);
    })


    section2.addEventListener('click', (event) => {
        if (event.target.textContent === 'Start') {
            debugger
            const yellowDiv = document.querySelector('.wrapper>section:nth-child(3)>div:nth-child(2)')
            const clonedElement = event.target.parentElement.parentElement.cloneNode(true);
            clonedElement.children[3].children[0].className = ('red');
            clonedElement.children[3].children[0].textContent = ('Delete');
            clonedElement.children[3].children[1].className = ('orange');
            clonedElement.children[3].children[1].textContent = ('Finish');

            yellowDiv.appendChild(clonedElement);
            event.target.parentElement.parentElement.remove()
        } else if (event.target.textContent === 'Delete') {
            event.target.parentElement.parentElement.remove()
        }
    })


    section3.addEventListener('click', (event) => {
        if (event.target.textContent === 'Finish') {
            const greenDiv = document.querySelector('.wrapper>section:nth-child(4)>div:nth-child(2)')
            const clonedElement = event.target.parentElement.parentElement.cloneNode(true);
            clonedElement.children[3].remove();

            greenDiv.appendChild(clonedElement);
            event.target.parentElement.parentElement.remove()
        } else if (event.target.textContent === 'Delete') {
            event.target.parentElement.parentElement.remove()
        }
    })
}