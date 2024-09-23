import { useForm } from 'react-hook-form';

interface AddBookProps {
    onSuccess: (msg: string) => void;
}

const AddBook: React.FC<AddBookProps> = ({ onSuccess }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

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

    const inputStyle = "input rounded mt-3 w-full p-2";
    const errorStyle = "text-red-400";

    return (
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

                <button className="bg-gray-300 hover:bg-gray-400 text-slate-900 font-semibold py-2 px-4 rounded mt-10 w-full md:w-auto">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
