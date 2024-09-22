import { useEffect, useState } from 'react';
import AddBook from './add-book';

const BookList = () => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await fetch('/api/books');
        const data = await response.json();
        setBooks(data);
    };

    useEffect(() => { fetchBooks() }, []);

    return (
        <div className="flex flex-col p-5 items-center w-64">
            <AddBook />
            <h2 className="text-xl mb-4">Book Inventory</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.title} by {book.author} ({book.genre}) - ISBN: {book.isbn}
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default BookList;