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
  title:
    "Victor Melo | GoHighLevel Implementation Specialist & Business Automation",
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
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
