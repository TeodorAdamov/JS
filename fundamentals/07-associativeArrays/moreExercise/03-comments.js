function com(data) {

    let users = [];
    let articles = [];


    for (let line of data) {

        if (line.includes('user ')) {
            let userName = line.replace('user ', '');
            users.push(userName);
        } else if (line.includes('article ')) {
            let articleName = line.replace('article ', '');
            let article = {
                name: articleName,
                comments: [],
            };
            articles.push(article);
        } else {
            let [userName, rest] = line.replace(' posts on ', '/').split('/');
            let [articleName, titleAndComment] = rest.split(': ');
            let [title, content] = titleAndComment.split(', ')
            let article = articles.find(art => art.name === articleName)

            if (users.includes(userName) && article) {
                let comment = {
                    title,
                    content,
                    author: userName
                }
                article.comments.push(comment);
            }
        }
    }

    articles.sort((a, b) => b.comments.length - a.comments.length)
        .forEach(article => {
            console.log(`Comments on ${article.name}`);
            article.comments.sort((a, b) => a.author.localeCompare(b.author))
                .forEach(comment => {
                    console.log(`--- From user ${comment.author}: ${comment.title} - ${comment.content}`);
                })
        })


}

com([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Books: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'])