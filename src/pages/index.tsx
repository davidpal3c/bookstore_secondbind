import { useState } from 'react';
import BookList from '@/components/BookList';
import Header from '../components/Header';
import { Button } from '@mui/material';
import ModalAdd from '../components/ModalAdd';
import DownloadJSON from '../components/downloadJSON';
import DownloadCSV from '../components/DownloadCSV';


const Index = () => {
    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleOpen = () => setModalAddOpen(true);
    const handleClose = () => setModalAddOpen(false);

    const handleSuccess = (msg: string) => {
        setMessage(msg);
        handleClose();
    }

    return (
        <div className="flex flex-col p-5 w-full font-sans">
            <Header />
            {message && <p className="text-[#a5b4fb]">{message}</p>}
            <div className="flex justify-end mb-4">
                <Button variant="contained" onClick={handleOpen}>Add Book</Button>
                <DownloadJSON />
                <DownloadCSV />

            </div>
            {/* <AddBook /> */}
            <div className="flex flex-col items-center">
                <h2 className="text-lg mb-4 text-foreground">Inventory</h2>
                <BookList />
            </div>
            <ModalAdd open={modalAddOpen} onClose={handleClose} onSuccess={handleSuccess} />
        </div>
    );
};

export default Index;

