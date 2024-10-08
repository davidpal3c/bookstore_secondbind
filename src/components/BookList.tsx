import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalEdit from './ModalEdit';
import { Book } from '@prisma/client';

// type for sort config defined
type SortConfig = {
    key: keyof Book | null;
    direction: 'ascending' | 'descending';
};

// function componentfor book list 
const BookList: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingBook, setEditingBook] = useState<Book | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: 'ascending' });

    // async function to fetch the list of books from API
    const fetchBooks = async () => {
        const response = await fetch('/api/books');
        const data: Book[] = await response.json();
        setBooks(data);
        setFilteredBooks(data);
    };

    // fetches books when component mounts
    useEffect(() => { fetchBooks(); }, []);

    // handles editing book info
    const handleEdit = (book: Book) => {
        setEditingBook(book);
        setIsEditModalOpen(true);
    };

    // handles delete book , id: number as input
    const handleDelete = async (id: number) => {
        const confirmDelete = confirm("Are you sure you want to delete this book?");
        if (confirmDelete) {
            const response = await fetch(`/api/books/${id}/delete`, {
                method: 'DELETE',
            });

            if (response.ok) {
                fetchBooks();
            } else {
                alert('Error deleting the book');
            }
        }
    };


    // handles successful editing of a book , message: string as input
    const handleEditSuccess = (message: string) => {
        alert(message);
        setIsEditModalOpen(false);
        fetchBooks();
    };

    // handles search input change , event: html input element as input
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchTerm(searchValue);

        const filtered = books.filter(book =>
            book.title.toLowerCase().includes(searchValue) ||
            book.author.toLowerCase().includes(searchValue) ||
            book.genre.toLowerCase().includes(searchValue) ||
            book.isbn.toLowerCase().includes(searchValue)
        );
        setFilteredBooks(filtered);
    };

    // Handles sort functionality for book inventory table
    const handleSort = (key: keyof Book) => {
        let direction: 'ascending' | 'descending' = 'ascending';                            // Explicitly typing direction
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';                                                   // Toggles direction if already sorted by key
        }

        setSortConfig({ key, direction });

        // Sorts filtered books based on selected key and direction
        const sortedBooks = [...filteredBooks].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
            return 0;
        });

        setFilteredBooks(sortedBooks);
    };


    return (
        <>
            {editingBook && (
                <ModalEdit
                    open={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    onSuccess={handleEditSuccess}
                    book={editingBook}
                />
            )}

            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search by title, author, genre, or ISBN"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="p-2 border 
                            border-gray-300 
                            rounded-md 
                            w-full 
                            md:w-80"
                />
            </div>

            <TableContainer component={Paper} className="bg-[rgba(0,0,0,.1)] rounded-[0.9rem] overflow-x-auto">
                <Table>
                    <TableHead>
                        <TableRow className="w-full max-w-7xl rounded-[0.9rem] bg-transparent table-container cursor-pointer">
                            {['id', 'title', 'author', 'genre', 'isbn'].map((column) => (
                                <TableCell
                                    key={column}
                                    className="text-white hover:bg-cyan-900"
                                    onClick={() => handleSort(column as keyof Book)} // Cast column to keyof Book
                                    style={{ cursor: 'pointer' }}
                                >
                                    {column.charAt(0).toUpperCase() + column.slice(1)}
                                    {sortConfig.key === column && (sortConfig.direction === 'ascending' ? ' 🔼' : ' 🔽')}
                                </TableCell>
                            ))}
                            <TableCell className="text-white">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map(book => (
                                <TableRow key={book.id} className="bg-transparent backdrop-blur-md hover:bg-cyan-900 transition-colors">
                                    <TableCell className="text-gray-200">{book.id}</TableCell>
                                    <TableCell className="text-gray-200">{book.title}</TableCell>
                                    <TableCell className="text-gray-200">{book.author}</TableCell>
                                    <TableCell className="text-gray-200">{book.genre}</TableCell>
                                    <TableCell className="text-gray-200">{book.isbn}</TableCell>
                                    <TableCell className="flex flex-row">
                                        <Tooltip title="Edit">
                                            <IconButton onClick={() => handleEdit(book)}
                                                className="text-sky-400 hover:text-orange-300">
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton onClick={() => handleDelete(book.id)} className="text-sky-400 hover:text-rose-400"
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center text-gray-400">
                                    No books found matching your search.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default BookList;
