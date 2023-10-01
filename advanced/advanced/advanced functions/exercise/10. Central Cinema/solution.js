function solve() {
    const [movie, hall, ticket] = Array.from(document.querySelectorAll('#add-new input'));
    const onScreenButton = document.querySelector('#container button');

    onScreenButton.addEventListener('click', (event) => {
        event.preventDefault();
        const movieName = movie.value;
        const ticketPrice = Number(ticket.value);
        if (!movie.value || !hall.value || !ticketPrice) {
            return
        }
        const movieList = document.querySelector('#movies ul');


        const li = create('li',);
        li.appendChild(create('span', movieName));
        li.appendChild(create('strong', `Hall: ${hall.value}`));
        const div = create('div');
        div.appendChild(create('strong', ticketPrice.toFixed(2)));
        div.appendChild(create('input', '', 'Tickets Sold'));
        const archiveButton = create('button', 'Archive', '')
        div.appendChild(archiveButton);
        li.appendChild(div);

        movieList.appendChild(li);
        movie.value = '';
        hall.value = '';
        ticket.value = '';
        


        archiveButton.addEventListener('click', (event) => {
            
            const input = event.target.parentElement.children[1];
            const archiveList = document.querySelector('#archive ul');
            debugger;
            if (input.value !== '' && !isNaN(Number(input.value))) {
                const archiveLi = create('li');
                archiveLi.appendChild(create('span', movieName))
                archiveLi.appendChild(create('strong', `Total amount: ${(Number(input.value) * ticketPrice).toFixed(2)}`))
                const deleteButton = create('button', 'Delete')
                archiveLi.appendChild(deleteButton)
                archiveList.appendChild(archiveLi);
                li.remove();

                deleteButton.addEventListener('click', (event) => {
                    event.target.parentElement.remove();
                })
            }
        })
    })

    document.querySelector('#archive button')
        .addEventListener('click', () => {
            Array.from(document.querySelectorAll('#archive li'))
                .forEach(li => li.remove());
        })



    function create(type, text, placeholder) {
        const htmlElement = document.createElement(type);
        if (text) {
            htmlElement.textContent = text;
        }
        if (placeholder) {
            htmlElement.placeholder = placeholder;
        }
        return htmlElement;
    }
}