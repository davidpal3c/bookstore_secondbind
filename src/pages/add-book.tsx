import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

interface AddBookProps {
    onSuccess: (msg: string) => void;
}

const AddBook: React.FC<AddBookProps> = ({ onSuccess }) => {
    const { register, handleSubmit, reset, setValue } = useForm();
    // const [message, setMessage] = useState('');

    const onSubmit = async (data) => {
        const response = await fetch('api/books/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            // setMessage('Book added successfully');
            onSuccess('Book added successfully');
            reset();
        } else {
            // setMessage('Error adding book');
            onSuccess('Error adding Book!');
        }
    };

    return (
        <div className="p-5">
            <h2 className="text-xl mb-4">Add a New Book</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('title')} placeholder="Title" className="input" />
                <input {...register('author')} placeholder="Author" className="input" />
                <input {...register('genre')} placeholder="Genre" className="input" />
                <input {...register('publicationDate')} type="date" className="input" />
                <input {...register('isbn')} placeholder="ISBN" className="input" />
                <button type="submit" className='btn'>Add Book</button>
            </form>
            {/* {message && <p>{message}</p>} */}
        </div>
    );
};

export default AddBook;