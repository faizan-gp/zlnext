import type { Metadata } from "next";
import "./globals.css";
import { seoKeywords } from "@/lib/seoKeywords";
import Script from "next/script";
import { montserrat, poppins } from './fonts'
import AnalyticsClient from "@/components/AnalyticsClient";
import { Suspense } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

export const metadata: Metadata = {
  title: {
    default: "Zero Latency Webster | VR Gaming & Virtual Reality Arena",
    template: "%s | Zero Latency Webster",
  },
  description: "Experience the world's most advanced VR Adventure with 2-8 players, at Zero Latency Webster. Book private events, team building, or bachelor parties today!",
  keywords: seoKeywords,
  authors: [{ name: "Zero Latency Webster" }],
  creator: "Zero Latency Webster",
  publisher: "Zero Latency",
  applicationName: "Zero Latency Webster",
  generator: "Next.js",
  metadataBase: new URL("https://zlwebster.com"),
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://zlwebster.com",
    languages: {
      "en-US": "https://zlwebster.com",
    },
  },
  openGraph: {
    title: "Zero Latency Webster | VR Gaming Arena near Houston, Texas",
    description:
      "Immersive free-roam VR arena in Webster, TX. Play exclusive VR games with friends, host parties & corporate events. Book your adventure today!",
    url: "https://zlwebster.com",
    siteName: "Zero Latency Webster",
    // images: [
    //   {
    //     url: "https://zlwebster.com/og-image.jpg", //need to change
    //     width: 1200,
    //     height: 630,
    //     alt: "Zero Latency Webster VR Arena",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EntertainmentBusiness",
              "@id": "https://zlwebster.com",
              "name": "Zero Latency Webster",
              "image": "https://zlwebster.com/og.jpg",
              "logo": "https://zlwebster.com/logo.png",
              "url": "https://zlwebster.com",
              "telephone": "+1-469-404-9149",
              "priceRange": "$$",
              "email": "zero@zlwebster.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "20801 Gulf Fwy suite 5",
                "addressLocality": "Webster",
                "addressRegion": "TX",
                "postalCode": "77598",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "29.5272844",
                "longitude": "-95.1308936"
              },
              "openingHours": [
                "Mo-Su 10:00-22:00"
              ],
              "sameAs": [
                "https://www.facebook.com/zerolatencywebstr",
                "https://www.instagram.com/zerolatencywebstr",
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "69"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Suspense fallback={null}>
          <AnalyticsClient />
        </Suspense>
        {/* GA4 */}
        {GA_ID && (
          <>
            <Script
              id="ga4"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel */}
        {META_PIXEL_ID && (
          <>
            <Script id="fb-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img height="1" width="1" style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt="" />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
