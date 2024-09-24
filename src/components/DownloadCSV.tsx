import React from 'react';
import { Button } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Book } from '@prisma/client'; // Ensure to import the Book type

const dateToday = () => {
    const dToday = new Date();
    const day = dToday.getDate();
    const month = dToday.getMonth() + 1; // Months are zero-indexed
    const year = dToday.getFullYear();
    return `${year}-${month}-${day}`;
}

// Function to handle CSV download: fetches API, parses JSON response
// Creates CSV rows with headers, creates Blob object and URL for download 
const handleDownloadCSV = () => {
    fetch('/api/books')
        .then(response => response.json())
        .then((data: Book[]) => {
            const csvRows = [
                ['Entry ID', 'Title', 'Author', 'Genre', 'ISBN'], // Header
                ...data.map((book: Book) => [book.id, book.title, book.author, book.genre, book.isbn]), // Annotate book type
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

// functional component for CSV download button 
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
    );
};

export default DownloadCSV;
