import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';


const handleDownloadJSON = () => {
    fetch('/api/books')
        .then(response => response.json())
        .then(data => {
            const jsonBlob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(jsonBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'inventory.json';
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
                startIcon={<i className="ion-md-cloud-download" style={{ fontSize: '20px', color: '#FFF' }}></i>}
                sx={{
                    backgroundColor: '#00BFA5',
                    color: '#FFF',
                    '&:hover': { backgroundColor: '#00796B' },
                    borderRadius: '50px',
                    padding: '10px 20px',
                }}
            >
                Download JSON
            </Button>
        </div>
    )
}

export default DownloadJSON;