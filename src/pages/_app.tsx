import '../styles/globals.css';
import Head from 'next/head';

function BookStoreApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default BookStoreApp