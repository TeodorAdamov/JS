async function attachEvents() {
    const loadPostsButton = document.getElementById('btnLoadPosts');
    const viewButton = document.getElementById('btnViewPost');
    const selectOption = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const commentsUl = document.getElementById('post-comments');
    const postUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const posts = await getInfo(postUrl)
    const commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;
    const comments = await getInfo(commentsUrl);

    loadPostsButton.addEventListener('click', () => {
        selectOption.textContent = '';
        posts.forEach(post => {
            const option = document.createElement('option');
            option.value = post.id;
            option.textContent = post.title;
            selectOption.appendChild(option);
        })
    })

    viewButton.addEventListener('click', () => {
        const currentPost = posts.find(post => post.id === selectOption.value);

        postBody.textContent = currentPost.body;
        postTitle.textContent = currentPost.title;
        commentsUl.textContent = '';

        comments.filter(comment => comment.postId === selectOption.value)
            .forEach(comment => {
                const li = document.createElement('li');
                li.textContent = comment.text
                li.id = comment.id;
                commentsUl.appendChild(li);
            })
    })

    async function getInfo(url) {
        const info = await fetch(url);
        const data = await info.json();
        return data;
    }
}

attachEvents();