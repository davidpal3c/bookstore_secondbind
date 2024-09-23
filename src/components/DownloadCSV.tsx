import { Button } from '@mui/material';


const handleDownloadCSV = () => {
    fetch('/api/books')
        .then(response => response.json())
        .then(data => {
            const csvRows = [
                ['Entry ID', 'Title', 'Author', 'Genre', 'ISBN'], // Header
                ...data.map(book => [book.id, book.title, book.author, book.genre, book.isbn]),
            ];
            const csvString = csvRows.map(row => row.join(',')).join('\n');
            const csvBlob = new Blob([csvString], { type: 'text/csv' });
            const url = URL.createObjectURL(csvBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'inventory.csv';
            a.click();
            URL.revokeObjectURL(url);
        });
};

const DownloadCSV: React.FC = () => {
    return (
        <div>
            <Button variant="contained" onClick={handleDownloadCSV} className="ml-2">Download CSV</Button>
        </div>
    )
}

export default DownloadCSV;