function article(data) {
    let commentsData = {
        userList: [],
        articleList: [],
        comments: {}
    };
 
    for (let line of data) {
        if (line.split(' ').length === 2) {
            const [command, text] = line.split(' ');
 
            if (command === 'user') {
                if (!commentsData.userList.includes(text)) {
                    commentsData.userList.push(text);
                }
            } else if (command === 'article') {
                if (!commentsData.articleList.includes(text)) {
                    commentsData.articleList.push(text);
                }
            }
        } else {
            const [username, article, title, content] = line
                .replace(' posts on ', '&')
                .replace(': ', '&')
                .replace(', ', '&')
                .split('&');
 
            if (commentsData.userList.includes(username) && commentsData.articleList.includes(article)) {
                if (!commentsData.comments.hasOwnProperty(article)) {
                    commentsData.comments[article] = [{
                        [username]: `--- From user ${username}: ${title} - ${content}`
                    }];
                } else {
                    commentsData.comments[article].push({
                        [username]: `--- From user ${username}: ${title} - ${content}`
                    });
                }
            }
        }
    }
    console.log(commentsData);
    // const sortComments = Object.entries(commentsData.comments)
    //     .sort((a, b) => b[1].length - a[1].length);
 
    // for (const [type, comments] of sortComments) {
    //     console.log(`Comments on ${type}`);
 
    //     for (const commentText of comments.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))) {
    //         const [_, comment] = Object.entries(commentText)[0];
    //         console.log(comment);
    //     }
    // }
}
 
article([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
])