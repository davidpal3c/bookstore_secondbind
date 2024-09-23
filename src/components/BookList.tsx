import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalEdit from './ModalEdit';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingBook, setEditingBook] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const fetchBooks = async () => {
        const response = await fetch('/api/books');
        const data = await response.json();
        setBooks(data);
        setFilteredBooks(data);
    };

    useEffect(() => { fetchBooks() }, []);

    const handleEdit = (book) => {
        setEditingBook(book);
        setIsEditModalOpen(true);
    };

    const handleDelete = async (id) => {
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

    const handleEditSuccess = (message) => {
        alert(message);
        setIsEditModalOpen(false);
        fetchBooks();
    };

    const handleSearchChange = (event) => {
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
                    className="p-2 border border-gray-300 rounded-md w-full md:w-80"
                />
            </div>

            <TableContainer component={Paper} className="bg-[rgba(0,0,0,.1)] rounded-[0.9rem] overflow-x-auto">
                <Table>
                    <TableHead>
                        <TableRow className="w-full max-w-7xl rounded-[0.9rem] bg-transparent table-container">
                            <TableCell className="text-white">Entry ID</TableCell>
                            <TableCell className="text-white">Title</TableCell>
                            <TableCell className="text-white">Author</TableCell>
                            <TableCell className="text-white">Genre</TableCell>
                            <TableCell className="text-white">ISBN</TableCell>
                            <TableCell className="text-white">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map(book => (
                                <TableRow key={book.id} className="bg-transparent backdrop-blur-md hover:bg-cyan-900 transition-colors cursor-pointer">
                                    <TableCell className="text-gray-200">{book.id}</TableCell>
                                    <TableCell className="text-gray-200">{book.title}</TableCell>
                                    <TableCell className="text-gray-200">{book.author}</TableCell>
                                    <TableCell className="text-gray-200">{book.genre}</TableCell>
                                    <TableCell className="text-gray-200">{book.isbn}</TableCell>
                                    <TableCell className="flex flex-row">
                                        <Tooltip title="Edit">
                                            <IconButton onClick={() => handleEdit(book)} sx={{ color: '#64b5f6', '&:hover': { color: '#00BFA5' } }}>
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton onClick={() => handleDelete(book.id)} sx={{ color: '#64b5f6', '&:hover': { color: '#d9757c' } }}>
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