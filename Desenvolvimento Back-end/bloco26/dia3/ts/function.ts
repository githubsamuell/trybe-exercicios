import fs from 'fs/promises';

import Book from './interfaces/Book';

async function read(): Promise<Book[]> {
    const data = await fs.readFile('./books.json', 'utf-8');

    const books: Book[] = JSON.parse(data);

    return books;
}

async function write(data: Book[]): Promise<void> {
    await fs.writeFile('./book.json', JSON.stringify(data) )
}

export { read, write };