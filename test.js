function com(data) {

    let myComments = {
        users: [],
        articles: {}
    };

    for (let line of data) {

        if (line.includes('user ')) {
            let userName = line.replace('user ', '');
            myComments.users.push(userName);
        } else if (line.includes('article ')) {
            let articleName = line.replace('article ', '');
            myComments.articles[articleName] = new Map;
        } else {
            let [userName, rest] = line.replace(' posts on ', '/').split('/');
            let [articleName, titleAndComment] = rest.split(': ');
            titleAndComment = titleAndComment.replace(', ', ' - ')

            if (myComments.users.includes(userName) && myComments.articles.hasOwnProperty(articleName)) {
                myComments.articles[articleName].set(userName, titleAndComment)
            }
        }
    }

    Object.entries(myComments.articles).sort((a, b) => b[1].size - a[1].size)
        .forEach(a => {
            console.log(`Comments on ${a[0]}`);
            Array.from(a[1].entries()).sort((a, b) => a[0].localeCompare(b[0]))
                .forEach(a => {
                    console.log(`--- From user ${a[0]}: ${a[1]}`);
                })
        })

}