import AddBook from '../pages/add-book';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    onSuccess: (msg: string) => void;
}

const ModalAdd: React.FC<ModalProps> = ({ open, onClose, onSuccess }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity
             ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <div className="bg-slate-200 rounded-lg shadow-lg w-11/12 md:w-1/3">
                <div className="p-4 border-b flex flex-row justify-between">
                    <h2 className="text-lg font-semibold text-slate-900">Add a New Book</h2>
                    <CancelRoundedIcon onClick={onClose} sx={{
                        marginRight: 0.5,
                        marginTop: 0.3,
                        color: "#fff",
                        '&:hover': {
                            color: "#164e63"
                        }
                    }} />
                </div>
                <div className="p-4">
                    <AddBook onSuccess={onSuccess} />
                </div>
            </div>
        </div>
    );
};

export default ModalAdd;