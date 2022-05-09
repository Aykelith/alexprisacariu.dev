//= React components
// Others
import Head from 'next/head';
import Script from 'next/script';

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

                {/* Global site tag (gtag.js) - Google Analytics */}
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SJG5VB8MFX" strategy="afterInteractive"></Script>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`window.dataLayer = window.dataLayer || [];
                      function gtag(){window.dataLayer.push(arguments)}
                      gtag('js', new Date());

                      gtag('config', 'G-SJG5VB8MFX');
                    `}
                </Script>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
