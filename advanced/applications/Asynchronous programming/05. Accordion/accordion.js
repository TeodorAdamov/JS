async function solution() {
    const mainDiv = document.getElementById('main');
    const arcticlesListUrl = 'http://localhost:3030/jsonstore/advanced/articles/list'
    const articles = await getInfo(arcticlesListUrl)

    articles.forEach(async (article) => {
        const articleUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${article._id}`
        const articleData = await getInfo(articleUrl)
        console.log(articleData);
        const newArticle = document.createElement('div');
        newArticle.className = 'accordion'
        newArticle.innerHTML = `
            <div class="head">
                <span>${articleData.title}</span>
                <button class="button" id="${articleData._id}">More</button>
            </div>
            <div class="extra">
                <p>${articleData.content}</p>
            </div>
        
    `
        mainDiv.appendChild(newArticle)

        const moreButton = newArticle.querySelector('button');
        moreButton.addEventListener('click', () => {
            const extraDiv = newArticle.querySelector('.extra');
            if (extraDiv.style.display === 'block') {
                extraDiv.style.display = 'none';
                moreButton.textContent = 'More';
            } else {
                extraDiv.style.display = 'block';
                moreButton.textContent = 'Less';
            }
        })
    })

    async function getInfo(url) {
        const info = await fetch(url);
        const data = await info.json();
        return data;
    }
}

solution()