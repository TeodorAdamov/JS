function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', createNew);
    const url = 'http://localhost:3030/jsonstore/phonebook';


    async function onLoad() {
        const response = await fetch(url);
        const data = await response.json();
        const phoneBookUl = document.getElementById('phonebook')
        phoneBookUl.textContent = '';
        Object.values(data).forEach(el => phoneBookUl.appendChild(createLi(el)))
    }

    function createLi(obj) {
        const li = document.createElement('li');
        const { person, phone, _id } = obj;
        li.textContent = `${person}: ${phone}`

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', async () => {
            const urlToDel = `http://localhost:3030/jsonstore/phonebook/${_id}`

            const options = {
                method: 'delete'
            }

            await fetch(urlToDel, options)
            li.remove()
        });

        li.appendChild(deleteButton);
        return li;
    }


    async function createNew() {
        const person = document.getElementById('person');
        const phone = document.getElementById('phone');

        const newRecord = {
            person: person.value,
            phone: phone.value
        }

        if (!person.value || !phone.value) {
            return
        }
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecord)
        }

        await fetch(url, options)
        person.value = '';
        phone.value = '';
        onLoad();
    }
}

attachEvents();