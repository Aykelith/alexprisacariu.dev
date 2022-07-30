//= React components
// Others
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import NextNProgress from 'nextjs-progressbar';

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
            {/* Global site tag (gtag.js) - Google Analytics */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SJG5VB8MFX" strategy="afterInteractive"></Script>
            <Script id="google-analytics" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments)}
                  gtag('js', new Date());

                  gtag('config', 'G-SJG5VB8MFX');
                `}
            </Script>
            <NextNProgress color="#006ad5" />
            <Component {...pageProps} />
            {!pageProps?.hideFooter && (
                <footer className="mt-2 mb-4">
                    <div className="box">
                        © {new Date().getFullYear()} Alexandru Prisacariu | Powered by{' '}
                        <Link href="https://nextjs.org">
                            <a className="text-black underline" target="_blank" rel="noreferrer noopener">
                                NextJS
                            </a>
                        </Link>
                        ,{' '}
                        <Link href="https://github.com">
                            <a className="text-black underline" target="_blank" rel="noreferrer noopener">
                                GitHub
                            </a>
                        </Link>
                    </div>
                </footer>
            )}
        </>
    );
}

export default MyApp;
