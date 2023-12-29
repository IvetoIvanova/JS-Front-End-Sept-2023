function storeBooks(input) {
    const shelves = {};

    for (const line of input) {
        if (line.includes("->")) {
            const [shelfId, shelfGenre] = line.split(" -> ");
            if (!shelves.hasOwnProperty(shelfId)) {
                shelves[shelfId] = { genre: shelfGenre, books: [] };
            }
        } else if (line.includes(":")) {
            const [bookInfo, bookGenre] = line.split(", ").map((el) => el.trim());
            const [bookTitle, bookAuthor] = bookInfo.split(":").map((el) => el.trim());

            const shelf = Object.values(shelves).find((shelf) => shelf.genre === bookGenre);

            if (shelf) {
                shelf.books.push({ title: bookTitle, author: bookAuthor });
            }
        }
    }

    const sortedShelves = Object.entries(shelves).sort((a, b) => b[1].books.length - a[1].books.length);

    for (const [shelfId, shelf] of sortedShelves) {
        console.log(`${shelfId} ${shelf.genre}: ${shelf.books.length}`);
        const sortedBooks = shelf.books.sort((a, b) => a.title.localeCompare(b.title));
        for (const book of sortedBooks) {
            console.log(`--> ${book.title}: ${book.author}`);
        }
    }
}

storeBooks(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi',
    
storeBooks(['1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi']);
