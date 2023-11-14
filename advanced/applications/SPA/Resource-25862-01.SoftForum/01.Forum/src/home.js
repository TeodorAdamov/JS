const newTopic = document.querySelector('.new-topic-border');
const topics = document.querySelector('.topic-container');
const topicUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts'
const commmentUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments'
const form = document.querySelector('.new-topic-border form');
form.addEventListener('click', addTopic)

export function showHome() {
    document.querySelector('main').replaceChildren(newTopic);
    document.querySelector('main').appendChild(topics);
    loadTopics()
    localStorage.clear();
}

async function addTopic(event) {
    event.preventDefault();
    console.log(event.target.textContent);

    if (event.target.textContent === 'Cancel') {
        return form.reset();
    } else if (event.target.textContent === 'Post') {
        const formData = new FormData(form)
        const { topicName, username, postText } = Object.fromEntries(formData.entries());

        if (!topicName || !username || !postText) {
            return alert('All fields required');
        }

        try {
            const response = await fetch(topicUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    topicName,
                    username,
                    date: new Date()
                })
            })

            if (!response.ok) {
                const error = await response.json()
                throw error
            }
            const data = await response.json()
            form.reset();

            const commentResponse = await fetch(commmentUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    postText,
                    _topicId: data._id
                })
            })

            if (!commentResponse.ok) {
                const commentError = await commentResponse.json()
                throw commentError;
            }
        } catch (err) {
            alert(err.message)
        }
        loadTopics()
    }
}




export async function loadTopics() {
    try {
        const response = await fetch(topicUrl);
        if (!response.ok) {
            const error = await response.json();
            throw error
        }
        const topicData = await response.json();
        const data = Object.values(topicData).map(createTopic)
        topics.replaceChildren(...data)
    } catch (err) {
        alert(err.message)
    }

}

function createTopic(topic) {
    const div = document.createElement('div');
    div.dataset.id = topic._id
    div.classList.add('topic-name-wrapper')
    div.innerHTML = `
    <div class="topic-name">
        <a href="#" class="normal">
            <h2>${topic.topicName}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${topic.date}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${topic.username}</span></p>
                </div>
            </div>
        </div>
    </div>`
    return div;
}