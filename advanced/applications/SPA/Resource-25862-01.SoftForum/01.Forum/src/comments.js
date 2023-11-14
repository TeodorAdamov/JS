const topicUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts/'
const commmentUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments'


export async function showComments(event) {
    event.preventDefault();
    if (event.target.tagName !== 'H2') {
        return
    }
    const topicId = event.target.parentElement.parentElement.parentElement.dataset.id

    try {
        const topicResponse = await fetch(topicUrl + topicId)
        if (!topicResponse.ok) {
            const error = await topicResponse.json();
            throw error
        }
        const topicData = await topicResponse.json();
        const commentResponse = await fetch(commmentUrl)
        if (!commentResponse.ok) {
            const error = await commentResponse.json();
            throw error
        }

        const commentData = await commentResponse.json()
        const originalComment = Object.values(commentData).filter(comment => {
            if (comment._topicId == topicId && comment.username == null) {
                return comment
            }
        })
        const div = changeToCommentView(topicData, ...originalComment)
        loadUserComments()
        div.querySelector('form').addEventListener('submit', postUserComments)

    } catch (err) {
        alert(err.message)
    }

    try {

    } catch (err) {
        alert(err.message)
    }
}



function changeToCommentView(topicData, comment) {
    const date = new Date(topicData.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const time = date.toLocaleTimeString().slice(0, -3)
    localStorage.setItem('topicID', topicData._id)

    const main = document.querySelector('main');
    const div = document.createElement('div')
    div.classList.add('container')
    div.innerHTML = `
            <!-- theme content  -->
            <div class="theme-content">
                <!-- theme-title  -->
                <div class="theme-title">
                    <div class="theme-name-wrapper">
                        <div class="theme-name">
                            <h2>${topicData.topicName}</h2>
    
                        </div>
    
                    </div>
                </div>
                <!-- comment  -->
    
                <div class="comment">
                    <div class="header">
                        <img src="./static/profile.png" alt="avatar">
                        <p><span>${topicData.username}</span> posted on <time>${year}-${month}-${day} ${time}</time></p>
            
                        <p class="post-content">${comment.postText}</p>
                    </div>
                </div>
    
                <div class="answer-comment">
                    <p><span>currentUser</span> comment:</p>
                    <div class="answer">
                        <form>
                            <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                            <div>
                                <label for="username">Username <span class="red">*</span></label>
                                <input type="text" name="username" id="username">
                            </div>
                            <button>Post</button>
                        </form>
                    </div>
                </div>
    
            </div>
    `

    main.replaceChildren(div);
    return div
}



async function postUserComments(event) {
    event.preventDefault();
    const _topicId = localStorage.getItem('topicID');
    const formData = new FormData(event.target);
    const { postText, username } = Object.fromEntries(formData.entries());
    if (!postText || !username) {
        return alert('Fields Required');
    }

    try {
        const response = await fetch(commmentUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ postText, username, _topicId })
        })

        if (!response.ok) {
            const error = await response.json();
            throw error
        }
        const data = await response.json();
        console.log(data);
    } catch (err) {
        alert(err.message);
    }
    event.target.reset()
    loadUserComments();
}

async function loadUserComments() {
    const commentDiv = document.querySelector('.comment');
    commentDiv.querySelectorAll('.user-comment').forEach(comment => comment.remove());
    const topicID = localStorage.getItem('topicID');
    try {
        const response = await fetch(commmentUrl);
        if (!response.ok) {
            const error = await response.json();
            throw error
        }
        const data = await response.json()
        const filteredComments = Object.values(data).filter(comment => {
            if (comment._topicId == topicID && comment.username) {
                return comment
            }
        })
        filteredComments.forEach(el => commentDiv.appendChild(createCommentDiv(el)))
    } catch (err) {
        alert(err.message)
    }
}

function createCommentDiv(comment) {
    const div = document.createElement('div');
    div.classList.add('user-comment');
    div.innerHTML = `
    <div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${comment.username}</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
                <div class="post-content">
                    <p>${comment.postText}</p>
                </div>
            </div>
        </div>
    `
    return div;
}