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
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    (function(window, document, dataLayerName, id) {
                    window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
                    function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString();f="; SameSite=Strict"}document.cookie=a+"="+b+d+f+"; path=/"}
                    var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
                    var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
                    tags.async=!0,tags.src="https://alexpriscariu.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
                    !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
                    })(window, document, 'dataLayer', '9dc1d869-3efc-40a3-b8e1-ec7fa21cf48f');
                `}
            </Script>
            <NextNProgress color="#006ad5" />
            <Component {...pageProps} />
            {!pageProps?.hideFooter && (
                <footer className="mt-2 mb-4">
                    <div className="box">
                        © {new Date().getFullYear()} Alexandru Prisacariu | Powered by{' '}
                        <Link href="https://nextjs.org" className="text-black underline" target="_blank" rel="noreferrer noopener">
                            NextJS
                        </Link>
                        ,{' '}
                        <Link href="https://github.com" className="text-black underline" target="_blank" rel="noreferrer noopener">
                            GitHub
                        </Link>
                    </div>
                </footer>
            )}
        </>
    );
}

export default MyApp;
