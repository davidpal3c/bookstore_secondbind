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
                    sx={{
                        backgroundColor: '#d9757c',
                        color: '#FFF',
                        '&:hover': { backgroundColor: '#164e63' },
                        borderRadius: '12px',
                        padding: '10px 20px'
                    }}
                    startIcon={<AddCircleOutlineIcon />}> <AutoStoriesRoundedIcon /></Button>
                <div className="flex flex-row">
                    <DownloadJSON />
                    <DownloadCSV />
                </div>
            </div>
            {/* <AddBook /> */}
            <div className="flex flex-col">
                <BookList />
            </div>
            <ModalAdd open={modalAddOpen} onClose={handleClose} onSuccess={handleSuccess} />
        </div>
    );
};

export default Index;

