import { useForm } from 'react-hook-form';

interface AddBookProps {
    onSuccess: (msg: string) => void;
}

const AddBook: React.FC<AddBookProps> = ({ onSuccess }) => {
    const { register, handleSubmit, reset, setValue } = useForm();

    const onSubmit = async (data) => {
        const response = await fetch('api/books/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            onSuccess('Book added successfully');
            reset();
        } else {
            onSuccess('Error adding Book!');
        }
    };

    const inputStyle = "input rounded mt-3 w-full p-2"

    return (
        <div className="p-5">
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <input {...register('title')} placeholder="Title" className="input rounded w-full p-2" />
                <input {...register('author')} placeholder="Author" className={inputStyle} />
                <input {...register('genre')} placeholder="Genre" className={inputStyle} />
                <input {...register('publicationDate')} type="date" className={inputStyle} />
                <input {...register('isbn')} placeholder="ISBN" className={inputStyle} />

                <button
                    className="bg-gray-300 hover:bg-gray-400 text-slate-900 font-semibold py-2 px-4 rounded mt-10 w-full md:w-auto"
                >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;