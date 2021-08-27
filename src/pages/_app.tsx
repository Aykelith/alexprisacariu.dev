//= React components
// Others
import Head from 'next/head';

//= Style & Assets
import 'tailwindcss/tailwind.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="target-densitydpi=device-dpi, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
