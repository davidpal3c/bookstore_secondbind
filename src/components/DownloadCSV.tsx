import { Button } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const dateToday = () => {
    const dToday = new Date();
    const day = dToday.getDate();
    const month = dToday.getMonth() + 1;
    const year = dToday.getFullYear();
    return `${year}-${month}-${day}`;
}


// function to handle csv download: fetches api, parse JSON response
// creates csv rows with headers, creates blob object and url for download 
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
            a.download = `inventory-${dateToday()}.csv`;
            a.click();
            URL.revokeObjectURL(url);
        });
};


// React functional component for CSV download button 
const DownloadCSV: React.FC = () => {
    return (
        <div>
            <Button
                variant="contained"
                onClick={handleDownloadCSV}
                startIcon={<CloudDownloadIcon />}
                sx={{
                    backgroundColor: '#00BFA5',
                    color: '#FFF',
                    '&:hover': { backgroundColor: '#164e63' },
                    borderRadius: '12px',
                    padding: '10px 20px',
                    marginX: '10px'
                }}
            >
                Download CSV
            </Button>
        </div>
    )
}

export default DownloadCSV;