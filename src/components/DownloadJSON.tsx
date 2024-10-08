import { Button } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


const dateToday = () => {
    const dToday = new Date();
    const day = dToday.getDate();
    const month = dToday.getMonth() + 1;
    const year = dToday.getFullYear();
    return `${year}-${month}-${day}`;
}

// function to handle json download: fetches api, parse JSON response, 
// creates JSON blob from data, creates url for download 
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

// React functional component for JSON download button 
const DownloadJSON: React.FC = () => {
    return (
        <div>
            <Button
                variant="contained"
                onClick={handleDownloadJSON}
                className="
                    bg-teal-500 text-white rounded-lg 
                    px-3 py-1.5
                    hover:bg-teal-700
                    sm:px-4 sm:py-2
                    md:px-5 md:py-2.5
                    mr-5
                ">
                <CloudDownloadIcon className="mr-2" />
                JSON
            </Button>
        </div>
    )
}

export default DownloadJSON;