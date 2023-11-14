function attachEvents() {
    document.getElementById('submit').addEventListener('click', onSend);
    document.getElementById('refresh').addEventListener('click', onRefresh);
    const url = 'http://localhost:3030/jsonstore/messenger';

    async function onSend() {

        const username = document.querySelector('input[name="author"]')
        const message = document.querySelector('input[name="content"]')
        if (!username.value || !message.value) {
            return
        }

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                author: username.value,
                content: message.value
            })
        }

        try {
            const response = await fetch(url, options)
            if (response.ok === false) {
                const error = response.json();
                throw error;
            }
        } catch (err) {
            alert(err.message);
        }
        username.value = '';
        message.value = '';
        onRefresh()
    }

    async function onRefresh() {
        const textarea = document.querySelector('textarea')
        textarea.textContent = '';
        const output = await getMessages();
        textarea.textContent = output.join('\n');


    }

    async function getMessages() {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const messages = []
        Object.values(data).forEach(({ author, content }) => {
            messages.push(`${author}: ${content}`)
        })
        console.log(messages);
        return messages;
    }
}

attachEvents();