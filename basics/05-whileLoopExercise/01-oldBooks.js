function oldBooks(input) {
    let bookNeeded = input[0];
    let currentBook = input[1];
    let index = 2;
    let booksChecked = 1;

    while (index <= input.length) {
        if (currentBook === bookNeeded) {
            console.log(`You checked ${booksChecked - 1} books and found it.`);
        } else if (currentBook === 'No More Books') {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${booksChecked} books.`);
        }
        currentBook = input[index];
        index++;
        if (currentBook !== 'No More Books'){
            booksChecked++;
        }

    }


}

oldBooks(['Bourne', 'Bourne']);