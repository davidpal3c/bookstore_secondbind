import '../styles/globals.css';
import Head from 'next/head';

function BookStoreApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    // href="https://unpkg.com/ionicons@5.5.2/dist/css/ionicons.min.css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/7.4.0/collection/components/icon/icon.min.css"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default BookStoreApp