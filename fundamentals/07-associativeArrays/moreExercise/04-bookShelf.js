function bookshelf(data) {

    const shelves = []
    for (let line of data) {

        if (line.includes(' -> ')) {
            const [id, genre] = line.split(' -> ');
            if (!shelves.find(a => a.id === Number(id))) {
                const shelf = {
                    id: Number(id),
                    genre,
                    books: []
                }
                shelves.push(shelf);
            }

        } else {
            line = line.replace(': ', ', ')
            const [title, author, genre] = line.split(', ');
            const shelf = shelves.find(a => a.genre === genre)
            if (shelf) {
                const book = {
                    title,
                    author,
                    genre,
                }
                shelf.books.push(book);
            }
        }
    }
    

    
    shelves.sort((a, b) => b.books.length - a.books.length)
        .forEach(shelf => {
            console.log(`${shelf.id} ${shelf.genre}: ${shelf.books.length}`);

            shelf.books.sort((a, b) => a.title.localeCompare(b.title))
                .forEach(book => {
                    console.log(`--> ${book.title}: ${book.author}`);
                })
        })
}

bookshelf(['1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'])