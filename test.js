function bookShelf(input) {
    let shelvesList = new Map();
    let bookList = new Map();
    for (const line of input) {
      if (line.includes(" -> ")) {
        let [id, type] = line.split(" -> ");
        if (!shelvesList.has(type)) {
          let temp = [...shelvesList.values()];
          if (!temp.includes(id)) {
            shelvesList.set(type, id);
          }
        }
      } else if (line.includes(": ")) {
        let [bookTitle, rest] = line.split(": ");
        let [bookAuthor, genre] = rest.split(", ");
        let curShelves = [...shelvesList.keys()];
        if (curShelves.includes(genre)) {
          if (!bookList.has(genre)) {
            bookList.set(genre, [
              { bookTitle: bookTitle, bookAuthor: bookAuthor },
            ]);
          } else {
            let currBookList = bookList.get(genre);
            currBookList.push({ bookTitle: bookTitle, bookAuthor: bookAuthor });
            bookList.set(genre, currBookList);
          }
        }
      }
    }
   
    [...bookList.entries()]
      .sort((a, b) => b[1].length - a[1].length)
      .forEach((shelf) => {
        let [genre, books] = shelf;
        books.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
        console.log(`${shelvesList.get(genre)} ${genre}: ${books.length}`);
        for (const book of books) {
          console.log(`---> ${book.bookTitle}: ${book.bookAuthor}`);
        }
      });
  }