// app/books/page.tsx
import React from 'react';

async function getBooks() {
    const res = await fetch('http://localhost:8080/rest/book');

    if (!res.ok) {
        // This will activate the closest `<error.js>` Error Boundary
        throw new Error('Failed to fetch books');
    }

    return res.json();
}

export default async function BooksPage() {
    const books = await getBooks();
    console.log(books);

    return (
        <div>
            <h1>Books</h1>
            <p>Welcome to the books section!</p>
            <ul>
                {books.map((book)  => (
                    <li key={book.id}>
                        {book.title} by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}