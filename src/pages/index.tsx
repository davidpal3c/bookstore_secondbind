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
        <div className="flex flex-col p-5 items-center w-full">
            <AddBook />
            <h2 className="text-xl mb-4 text-foreground">Book Inventory</h2>
            <div className="w-full max-w-7xl overflow-x-auto">
                <table className="min-w-full table-auto border-collapse" style={{ borderColor: "var(--border-color)" }}>
                    <thead>
                        <tr className="bg-gray-800 text-[var(--secondary-color)]">
                            <th className="border p-2">Entry ID</th>
                            <th className="border p-2">Title</th>
                            <th className="border p-2">Author</th>
                            <th className="border p-2">Genre</th>
                            <th className="border p-2">ISBN</th>
                            {/* <th>Publication Date</th> */}
                            <th className="border p-2">ISBN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.id} className="bg-black bg-opacity-10 backdrop-blur-[30px] p-2 mt-2 shadow-[0_0_1.3rem_var(--second-btn-color)] rounded-lg">
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.genre}</td>
                                <td>{book.isbn}</td>
                                {/* <td>{book.publicationDate}</td> */}
                                <td>Add, Edit, Remove</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default BookList;



// <ul className="space-y-2">
//     {books.map(book => (
//         <div className="bg-black bg-opacity-10 backdrop-blur-[30px] p-2 mt-2 shadow-[0_0_1.3rem_var(--second-btn-color)] rounded-lg">
//             <li key={book.id}>
//                 {book.title} by {book.author} ({book.genre}) - ISBN: {book.isbn}
//             </li>
//         </div>
//     ))}
// </ul>