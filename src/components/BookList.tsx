import { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';


const BookList = () => {
    const [books, setBooks] = useState([]);
    const [editingBook, setEditingBook] = useState(null);

    // fetch books 
    const fetchBooks = async () => {
        const response = await fetch('/api/books');
        const data = await response.json();
        setBooks(data);
    };

    useEffect(() => { fetchBooks() }, []);


    const handleEdit = async (id: number) => {
        const title = prompt("Enter title");
        const author = prompt("Enter author");
        const genre = prompt("Enter genre");
        const publicationDate = prompt("Enter new publication date");
        const isbn = prompt("Enter ISBN: ");

        const response = await fetch(`/api/books/${id}/edit`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, author, genre, publicationDate, isbn }),
        });

        if (response.ok) {
            fetchBooks();
        } else {
            alert('Error updating the book');
        }
    };

    const handleDelete = async (id: number) => {
        const confirmDelete = confirm("Are you sure you want to delete this book?");
        if (confirmDelete) {
            const response = await fetch(`/api/books/${id}/delete`, {
                method: 'DELETE',
            });

            if (response.ok) {
                fetchBooks(); // Refresh the list after deletion
            } else {
                alert('Error deleting the book');
            }
        }
    };

    return (
        <TableContainer component={Paper} className="bg-[rgba(0,0,0,.1)] rounded-[0.9rem] ">
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
                    {books.map(book => (
                        <TableRow key={book.id} className="bg-transparent backdrop-blur-md hover:bg-cyan-900 transition-colors cursor-pointer">
                            <TableCell className="text-teal-400">{book.id}</TableCell>
                            <TableCell className="text-teal-400">{book.title}</TableCell>
                            <TableCell className="text-teal-400">{book.author}</TableCell>
                            <TableCell className="text-teal-400">{book.genre}</TableCell>
                            <TableCell className="text-red-300">{book.isbn}</TableCell>
                            <TableCell className="flex flex-row">
                                <Tooltip title="Edit">
                                    <IconButton onClick={() => handleEdit(book.id)}>
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton onClick={() => handleDelete(book.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}


export default BookList;