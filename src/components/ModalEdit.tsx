import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useEffect } from 'react';

interface ModalEditProps {
    open: boolean;
    onClose: () => void;
    onSuccess: (msg: string) => void;
    book: any;
}

const ModalEdit: React.FC<ModalEditProps> = ({ open, onClose, onSuccess, book }) => {
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            title: '',
            author: '',
            genre: '',
            publicationDate: '',
            isbn: '',
        },
    });

    // useEffect to update form values when the book prop changes
    useEffect(() => {
        if (book) {
            setValue('title', book.title);
            setValue('author', book.author);
            setValue('genre', book.genre);
            setValue('publicationDate', book.publicationDate);
            setValue('isbn', book.isbn);
        }
    }, [book, setValue]);

    const onSubmit = async (data) => {
        const response = await fetch(`/api/books/${book.id}/edit`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            onSuccess('Book updated successfully');
        } else {
            onSuccess('Error updating book');
        }
        onClose();
    };

    const inputStyle = "input rounded mt-3 w-full p-2";

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity
            ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <div className="bg-slate-200 rounded-lg shadow-lg w-11/12 md:w-1/3">
                <div className="p-4 border-b flex flex-row justify-between">
                    <h2 className="text-lg font-semibold text-slate-900">Edit Book Details</h2>
                    <CancelRoundedIcon onClick={onClose} sx={{
                        marginRight: 0.5,
                        marginTop: 0.3,
                        color: "#fff",
                        '&:hover': {
                            color: "#164e63"
                        }
                    }} />
                </div>
                <div className="p-5">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <input {...register('title')} placeholder="Title" className={inputStyle} />
                        <input {...register('author')} placeholder="Author" className={inputStyle} />
                        <input {...register('genre')} placeholder="Genre" className={inputStyle} />
                        <input {...register('publicationDate')} type="date" className={inputStyle} />
                        <input {...register('isbn')} placeholder="ISBN" className={inputStyle} />

                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-slate-900 font-semibold py-2 px-4 rounded mt-10"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalEdit;
