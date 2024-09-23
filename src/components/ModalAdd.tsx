// ModalAdd.tsx
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import AddBook from '../pages/add-book';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    onSuccess: (msg: string) => void;
}

const ModalAdd: React.FC<ModalProps> = ({ open, onClose, onSuccess }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add a New Book</DialogTitle>
            <DialogContent>
                <AddBook onSuccess={onSuccess} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalAdd;
