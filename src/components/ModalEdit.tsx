import { useForm } from 'react-hook-form';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useEffect } from 'react';

// defines the book type for better type safety
interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    isbn: string;
}

// defines properties for the modal component
interface ModalEditProps {
    open: boolean;
    onClose: () => void;
    onSuccess: (msg: string) => void;
    book: Book | null; // Make book nullable to handle the initial state
}

// functional component for editing book through modal
const ModalEdit: React.FC<ModalEditProps> = ({ open, onClose, onSuccess, book }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Book>({
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

    const onSubmit = async (data: Book) => {
        try {
            const response = await fetch(`/api/books/${book?.id}/edit`, {
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
        } catch (error) {
            console.error(error);
            onSuccess('An unexpected error occurred while updating the book.');
        }
        onClose();
    };

    const inputStyle = "input rounded
