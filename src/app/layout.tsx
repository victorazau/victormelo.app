import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Melo — GoHighLevel Expert | Business Automation | Miami, FL",
  description:
    "I help businesses automate operations, close more clients, and scale using GoHighLevel, n8n, and custom integrations. Based in Miami, FL — serving clients in the US, Brazil, and worldwide.",
  keywords: [
    "Victor Melo",
    "GoHighLevel specialist",
    "GHL implementation",
    "business automation",
    "CRM automation",
    "GoHighLevel expert",
    "n8n automation",
    "marketing automation",
    "RevOps consultant",
    "Miami automation consultant",
  ],
  authors: [{ name: "Victor Melo" }],
  creator: "Victor Melo",
  openGraph: {
    title: "Victor Melo | GoHighLevel Specialist & Business Automation",
    description:
      "I help businesses automate operations, close more clients, and scale. Based in Miami, FL.",
    url: "https://victormelo.app",
    siteName: "Victor Melo",
    locale: "en_US",
    type: "website",
    alternateLocale: ["pt_BR", "es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Melo | GoHighLevel Specialist",
    description:
      "Business automation consultant based in Miami, FL. GoHighLevel, n8n, CRM integrations.",
  },
  alternates: {
    canonical: "https://victormelo.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/victor-melo.webp" as="image" type="image/webp" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Victor Melo",
              jobTitle: "GoHighLevel Implementation Specialist",
              description:
                "Business automation consultant specializing in GoHighLevel, CRM automation, and system integrations.",
              url: "https://victormelo.app",
              sameAs: [
                "https://instagram.com/victor.melo.io",
                "https://www.youtube.com/@Victor_Melo_io",
                "https://facebook.com/Victor.melo.io",
                "https://tiktok.com/@victor.melo.io",
                "https://www.linkedin.com/in/victormeloio/",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Vida Digital Solutions LLC",
                url: "https://vidadigitalsolutions.com",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Miami",
                  addressRegion: "FL",
                  addressCountry: "US",
                },
              },
              knowsAbout: [
                "GoHighLevel",
                "CRM Automation",
                "Business Process Automation",
                "n8n",
                "Meta Ads",
                "Google Ads",
                "System Integration",
              ],
              nationality: "Brazilian",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Miami",
                addressRegion: "FL",
                addressCountry: "US",
              },
            }),
          }}
        />
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="3bndFugRDEk5N_jHhCd9aegejmO3N9OsFyTHlYoAAZQ"
        />

      </head>
      <body className="min-h-full flex flex-col">
        {children}

        {/* Tracking scripts — loaded after content to avoid blocking render */}
        {/* Google Analytics GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8ZQTSMLSL5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8ZQTSMLSL5');
            `,
          }}
        />

        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1748155102819418');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1748155102819418&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "w8kztii3o2");
            `,
          }}
        />
      </body>
    </html>
  );
}
