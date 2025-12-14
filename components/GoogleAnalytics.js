"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
    const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

    if (!gaId) {
        return null;
    }

    return (
        <>
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${gaId}`}
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                ></iframe>
            </noscript>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gaId}');

          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'client_storage': 'none',
          });

          gtag('config', '${gaId}', {
            'anonymize_ip': true,
            'client_storage': 'none',
          });
        `}
            </Script>
        </>
    );
}
