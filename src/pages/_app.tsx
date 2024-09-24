import '../styles/globals.css';
import { AppProps } from 'next/app';

function BookStoreApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default BookStoreApp