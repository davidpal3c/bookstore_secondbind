import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useEffect } from 'react';

// defines properties for modal component
interface ModalEditProps {
    open: boolean;
    onClose: () => void;
    onSuccess: (msg: string) => void;
    book: any;
}

// functional component for editing book through modal
const ModalEdit: React.FC<ModalEditProps> = ({ open, onClose, onSuccess, book }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
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
            setValue('publicationDate', book.publicationDate ? new Date(book.publicationDate).toISOString().substring(0, 10) : '');
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
            const errMsg = await response.json();
            onSuccess(`Error updating book: ${errMsg.error}`);
        }
        onClose();
    };

    const inputStyle = "input rounded mt-3 w-full p-2";
    const errorStyle = "text-red-400";

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register('title', { required: 'Title is required' })}
                            placeholder="Title"
                            className={inputStyle}
                        />
                        {errors.title && <p className={errorStyle}>{errors.title.message}</p>}

                        <input
                            {...register('author', { required: 'Author is required' })}
                            placeholder="Author"
                            className={inputStyle}
                        />
                        {errors.author && <p className={errorStyle}>{errors.author.message}</p>}

                        <input
                            {...register('genre', { required: 'Genre is required' })}
                            placeholder="Genre"
                            className={inputStyle}
                        />
                        {errors.genre && <p className={errorStyle}>{errors.genre.message}</p>}

                        <input
                            {...register('publicationDate', { required: 'Publication date is required' })}
                            type="date"
                            className={inputStyle}
                        />
                        {errors.publicationDate && <p className={errorStyle}>{errors.publicationDate.message}</p>}

                        <input
                            {...register('isbn', {
                                required: 'ISBN is required',
                                pattern: { value: /^[0-9-]*$/, message: 'Invalid ISBN format' }
                            })}
                            placeholder="ISBN"
                            className={inputStyle}
                        />
                        {errors.isbn && <p className={errorStyle}>{errors.isbn.message}</p>}

                        <button className="bg-gray-300 hover:bg-gray-400 text-slate-900 font-semibold py-2 px-4 rounded mt-10">
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalEdit;
