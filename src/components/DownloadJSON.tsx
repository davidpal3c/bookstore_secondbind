import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


const dateToday = () => {
    const dToday = new Date();
    const day = dToday.getDate();
    const month = dToday.getMonth() + 1;
    const year = dToday.getFullYear();
    return `${year}-${month}-${day}`;
}

const handleDownloadJSON = () => {
    fetch('/api/books')
        .then(response => response.json())
        .then(data => {
            const jsonBlob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(jsonBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `inventory-${dateToday()}.json`;
            a.click();
            URL.revokeObjectURL(url);
        });
};

const DownloadJSON: React.FC = () => {
    return (
        <div>
            <Button
                variant="contained"
                onClick={handleDownloadJSON}
                startIcon={<CloudDownloadIcon />}
                sx={{
                    backgroundColor: '#00BFA5',
                    color: '#FFF',
                    '&:hover': { backgroundColor: '#164e63' },
                    borderRadius: '12px',
                    padding: '10px 20px',
                }}
            >
                Download JSON
            </Button>
        </div>
    )
}

export default DownloadJSON;