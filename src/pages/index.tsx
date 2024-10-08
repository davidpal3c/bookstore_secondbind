
/**
 * @file index.tsx
 * @author David Palacios
 * @date 2024-09-23
 * @description This file serves as the main entry point for the Bookstore application.
 *              It renders the main page where users can view, search, add, edit, and delete books.
 * @functionality
 * - Fetches and displays a list of books from the backend API.
 * - Provides a search functionality to filter books by title, author, genre, or ISBN.
 * - Allows users to add new books via a modal form.
 * - Allows users to edit existing books via a modal form.
 * - Allows users to delete books with a confirmation prompt.
 * @contact davidpal3c@gmail.com
 */


import { useState } from 'react';
import BookList from '@/components/BookList';
import Header from '../components/Header';
import { Button } from '@mui/material';
import ModalAdd from '../components/ModalAdd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import DownloadJSON from '../components/DownloadJSON';
import DownloadCSV from '../components/DownloadCSV';


const Index = () => {

    // States to manage : visibility of addBook modal, and error messages
    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleOpen = () => setModalAddOpen(true);
    const handleClose = () => setModalAddOpen(false);

    // function to handle successful book addition and set message 
    const handleSuccess = (msg: string) => {
        setMessage(msg);
        handleClose();
    }

    return (
        <div className="flex flex-col p-5 w-full font-sans">
            <Header />
            {message && <p className="text-[#a5b4fb]">{message}</p>}
            <div className="flex flex-col items-center mt-10">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Book Inventory</h2>
            </div>
            <div className="flex justify-between my-2 mb-5">
                <Button variant="contained" onClick={handleOpen}
                    className="
                        bg-cyan-900
                        rounded-lg
                        px-3 py-1.5       
                        space-x-2                 
                        hover:bg-cyan-600
                        sm:px-4 sm:py-2
                        md:px-5 md:py-2.5                         
                    ">
                    <AddCircleOutlineIcon />
                    <AutoStoriesRoundedIcon />
                </Button>
                <div className="flex flex-row">
                    <DownloadJSON />
                    <DownloadCSV />
                </div>
            </div>
            <div className="flex flex-col">
                <BookList />
            </div>
            <ModalAdd open={modalAddOpen} onClose={handleClose} onSuccess={handleSuccess} />
        </div>
    );
};

export default Index;

