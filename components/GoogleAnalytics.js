"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
    const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

    if (!gaId) {
        return null;
    }

    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-MVKWH96K1X');

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
