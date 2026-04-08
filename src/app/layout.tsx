import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TrackingEvents from "@/components/ui/TrackingEvents";
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
  title: "Victor Melo — GoHighLevel Expert | CRM Automation & Business Systems | Miami, FL",
  description:
    "Victor Melo is a GoHighLevel implementation specialist and business automation consultant based in Miami, FL. Expert in GHL setup, CRM automation, n8n workflows, Meta Ads, Google Ads, API integrations, sales pipelines, RevOps, and AI-powered business systems. Serving companies in the US, Brazil, and worldwide.",
  keywords: [
    // Brand
    "Victor Melo", "Victor Melo GoHighLevel", "Victor Melo automation", "Victor Melo Miami",
    "Vida Digital Solutions", "Vida Digital Solutions LLC",
    // GHL specific
    "GoHighLevel specialist", "GoHighLevel expert", "GoHighLevel implementation",
    "GoHighLevel setup", "GoHighLevel consultant", "GoHighLevel agency",
    "GoHighLevel developer", "GoHighLevel integrations", "GoHighLevel automation",
    "GHL implementation", "GHL setup", "GHL expert", "GHL consultant",
    "GHL automation", "GHL specialist near me", "GHL certified expert",
    "GoHighLevel CRM setup", "GoHighLevel pipeline setup", "GoHighLevel onboarding",
    "GoHighLevel white label", "GoHighLevel SaaS setup",
    // CRM & Automation
    "CRM automation", "CRM implementation", "CRM setup service",
    "business automation consultant", "business process automation",
    "marketing automation agency", "marketing automation specialist",
    "sales automation", "lead automation", "workflow automation",
    "automated follow-up", "automated lead nurturing", "automated billing",
    // RevOps
    "RevOps consultant", "revenue operations", "sales operations consultant",
    "revenue operations specialist", "RevOps agency",
    // Integrations
    "n8n automation", "n8n workflows", "n8n integrations",
    "API integrations", "Zapier expert", "webhook integrations",
    "Stripe integration", "ClickUp integration", "ZapSign integration",
    "WhatsApp automation", "WhatsApp business automation",
    // Ads
    "Meta Ads expert", "Facebook Ads consultant", "Google Ads specialist",
    "Google Guaranteed setup", "paid advertising consultant",
    // Location-based
    "automation consultant Miami", "CRM consultant Miami FL",
    "GoHighLevel Miami", "marketing automation Miami",
    "business automation Florida", "CRM specialist South Florida",
    "automation consultant USA", "GHL expert United States",
    // Portuguese keywords
    "especialista GoHighLevel", "implementação GoHighLevel Brasil",
    "automação de negócios", "automação CRM", "consultor de automação",
    "integração de sistemas", "automação comercial",
    "agência de automação marketing", "automação WhatsApp",
    "régua de cobrança automática", "funil de vendas automatizado",
    // Spanish keywords
    "especialista GoHighLevel", "automatización de negocios",
    "consultor CRM", "automatización empresarial",
    // Industry-specific
    "CRM for cleaning companies", "CRM for law firms", "CRM for accountants",
    "CRM for real estate", "CRM for service businesses",
    "automation for small business", "automation for agencies",
    // Comparison/alternative keywords
    "GoHighLevel vs HubSpot", "GoHighLevel vs Salesforce",
    "HubSpot alternative", "Salesforce alternative for small business",
    "all-in-one CRM solution", "affordable CRM automation",
    // AI & modern
    "AI business automation", "AI-powered CRM", "AI workflow automation",
    "ChatGPT business automation", "AI lead qualification",
    // Brazilian entrepreneur cities in US — location targeting
    "automação para brasileiros nos EUA", "CRM para brasileiros nos Estados Unidos",
    "GoHighLevel para brasileiros", "automação de negócios brasileiro EUA",
    "consultor automação Miami", "consultor CRM brasileiro Miami",
    "automation consultant Miami FL", "GHL expert Miami Florida",
    "automation consultant Boston", "CRM automation Boston MA",
    "Brazilian business automation Boston", "GoHighLevel Boston",
    "automation consultant Orlando", "CRM automation Orlando FL",
    "Brazilian business Orlando", "GoHighLevel Orlando",
    "automation consultant New York", "CRM automation NYC",
    "Brazilian business automation New York", "GoHighLevel New York",
    "automation consultant Atlanta", "CRM automation Atlanta GA",
    "Brazilian business Atlanta", "GoHighLevel Atlanta",
    "automation consultant Newark", "CRM automation New Jersey",
    "Brazilian business New Jersey", "GoHighLevel New Jersey",
    "automation consultant Los Angeles", "CRM automation LA",
    "Brazilian business Los Angeles", "GoHighLevel Los Angeles",
    "automation consultant Houston", "CRM automation Houston TX",
    "Brazilian business Houston", "GoHighLevel Houston",
    "automation consultant Pompano Beach", "CRM automation Fort Lauderdale",
    "Brazilian business Broward County", "GoHighLevel South Florida",
    "automation consultant Framingham", "Brazilian business Massachusetts",
    "automation consultant Danbury CT", "Brazilian business Connecticut",
    "automation consultant Philadelphia", "Brazilian business Pennsylvania",
    // Brazilian entrepreneur targeting
    "empresa brasileira nos EUA", "empresário brasileiro Estados Unidos",
    "negócio brasileiro Miami", "negócio brasileiro Orlando",
    "empreendedor brasileiro EUA", "Brazilian owned business USA",
    "Brazilian entrepreneur USA", "Latino business automation",
    "Hispanic business automation", "immigrant business automation",
    "automação para imigrantes", "CRM para empresa de limpeza",
    "CRM para restaurante brasileiro", "CRM para contractor",
    "automation for cleaning business", "automation for contractor",
    "automation for restaurant", "automation for home services",
  ],
  authors: [{ name: "Victor Melo" }],
  creator: "Victor Melo",
  publisher: "Vida Digital Solutions LLC",
  openGraph: {
    title: "Victor Melo — GoHighLevel Expert | CRM Automation & Business Systems",
    description:
      "GoHighLevel implementation specialist. I automate business operations, build CRM systems, and integrate any tool via API. Based in Miami, FL — serving the US, Brazil, and worldwide. 35+ clients across 3 countries.",
    url: "https://victormelo.app",
    siteName: "Victor Melo",
    locale: "en_US",
    type: "website",
    alternateLocale: ["pt_BR", "es_ES"],
    images: [
      {
        url: "https://victormelo.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Victor Melo — GoHighLevel Expert & Business Automation Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Melo — GoHighLevel Expert | Miami, FL",
    description:
      "GHL implementation, CRM automation, n8n workflows, API integrations. 35+ clients in US & Brazil. Book a free strategy call.",
    images: ["https://victormelo.app/og-image.jpg"],
  },
  alternates: {
    canonical: "https://victormelo.app",
    languages: {
      "en": "https://victormelo.app",
      "pt-BR": "https://victormelo.app",
      "es": "https://victormelo.app",
      "x-default": "https://victormelo.app",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Miami",
    "geo.position": "25.7617;-80.1918",
    ICBM: "25.7617, -80.1918",
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

        {/* Schema.org — Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Victor Melo",
              givenName: "Victor",
              familyName: "Melo",
              birthDate: "1997",
              jobTitle: "GoHighLevel Implementation Specialist & Business Automation Consultant",
              description: "Victor Melo is a GoHighLevel certified specialist and business automation consultant based in Miami, FL. He helps businesses automate operations, build CRM systems, integrate tools via API, and scale revenue using GoHighLevel, n8n, ClickUp, Stripe, and AI-powered workflows. Early GHL adopter since 2023 with 35+ clients across 3 countries.",
              url: "https://victormelo.app",
              image: "https://victormelo.app/victor-melo.webp",
              email: "info@victormelo.app",
              telephone: "+14382985740",
              sameAs: [
                "https://instagram.com/victor.melo.io",
                "https://www.youtube.com/@Victor_Melo_io",
                "https://facebook.com/Victor.melo.io",
                "https://tiktok.com/@victor.melo.io",
                "https://www.linkedin.com/in/victormeloio/",
                "https://victormelo.app/bio",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Vida Digital Solutions LLC",
                url: "https://vidadigitalsolutions.com",
                foundingDate: "2022",
                address: { "@type": "PostalAddress", addressLocality: "Miami", addressRegion: "FL", addressCountry: "US" },
              },
              knowsAbout: [
                "GoHighLevel", "GoHighLevel Implementation", "GoHighLevel CRM", "GoHighLevel Automation",
                "CRM Automation", "CRM Implementation", "CRM Setup",
                "Business Process Automation", "Marketing Automation", "Sales Automation",
                "n8n", "n8n Workflows", "Zapier", "Webhook Integrations", "API Integrations",
                "Meta Ads", "Facebook Ads", "Google Ads", "Google Guaranteed",
                "Stripe Integration", "ClickUp", "ZapSign", "Asaas",
                "WhatsApp Business Automation", "Revenue Operations", "RevOps",
                "Sales Pipeline Optimization", "Lead Nurturing", "Automated Follow-up",
                "AI Business Automation", "AI Workflows", "Automated Billing",
                "Website Development", "Landing Page Development", "Funnel Building",
                "Next.js", "Cloudflare", "Tailwind CSS",
              ],
              nationality: { "@type": "Country", name: "Brazil" },
              address: { "@type": "PostalAddress", addressLocality: "Miami", addressRegion: "FL", addressCountry: "US" },
              areaServed: [
                { "@type": "Country", name: "United States" },
                { "@type": "Country", name: "Brazil" },
                { "@type": "Place", name: "Global" },
              ],
            }),
          }}
        />
        {/* Schema.org — ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Victor Melo — GoHighLevel & Automation Consulting",
              description: "GoHighLevel implementation, CRM automation, business process automation, API integrations, and RevOps consulting. Serving businesses in the US, Brazil, and worldwide.",
              url: "https://victormelo.app",
              image: "https://victormelo.app/victor-melo.webp",
              telephone: "+14382985740",
              email: "info@victormelo.app",
              address: { "@type": "PostalAddress", streetAddress: "", addressLocality: "Miami", addressRegion: "FL", postalCode: "", addressCountry: "US" },
              geo: { "@type": "GeoCoordinates", latitude: "25.7617", longitude: "-80.1918" },
              areaServed: [
                { "@type": "Country", name: "United States" },
                { "@type": "Country", name: "Brazil" },
                { "@type": "City", name: "Miami", containedInPlace: { "@type": "State", name: "Florida" } },
                { "@type": "City", name: "Orlando", containedInPlace: { "@type": "State", name: "Florida" } },
                { "@type": "City", name: "Fort Lauderdale", containedInPlace: { "@type": "State", name: "Florida" } },
                { "@type": "City", name: "Pompano Beach", containedInPlace: { "@type": "State", name: "Florida" } },
                { "@type": "City", name: "Boston", containedInPlace: { "@type": "State", name: "Massachusetts" } },
                { "@type": "City", name: "Framingham", containedInPlace: { "@type": "State", name: "Massachusetts" } },
                { "@type": "City", name: "New York" },
                { "@type": "City", name: "Newark", containedInPlace: { "@type": "State", name: "New Jersey" } },
                { "@type": "City", name: "Atlanta", containedInPlace: { "@type": "State", name: "Georgia" } },
                { "@type": "City", name: "Houston", containedInPlace: { "@type": "State", name: "Texas" } },
                { "@type": "City", name: "Los Angeles", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "Philadelphia", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
                { "@type": "City", name: "Danbury", containedInPlace: { "@type": "State", name: "Connecticut" } },
              ],
              priceRange: "$$$",
              openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "GoHighLevel Implementation & RevOps", description: "Complete GHL ecosystem setup: pipelines, automations, integrations, onboarding, sales operations, and financial workflows." } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Automation & Integrations", description: "Automate any business process via n8n, GHL, or Zapier. Connect any system with an API: Stripe, ClickUp, ZapSign, WhatsApp, Meta Ads, Google." } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website & Funnel Development", description: "High-converting landing pages, websites, and sales funnels built to capture leads and drive revenue 24/7." } },
                ],
              },
              aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "15", bestRating: "5" },
            }),
          }}
        />
        {/* Schema.org — FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Is GoHighLevel implementation worth the investment for my business?", acceptedAnswer: { "@type": "Answer", text: "Most clients see ROI within the first 30 days. The cost of lost leads, manual follow-ups, and disconnected tools is far greater than the investment. Automation pays for itself in weeks, not months — and keeps working 24/7 without a salary." } },
                { "@type": "Question", name: "How long does a GoHighLevel implementation take?", acceptedAnswer: { "@type": "Answer", text: "Basic implementations: 2-4 weeks. Complex projects: 4-8 weeks. Everything is scoped and defined before we start." } },
                { "@type": "Question", name: "Do I need to already have GoHighLevel?", acceptedAnswer: { "@type": "Answer", text: "No. Victor handles the full setup from scratch, or can work with your existing GHL account. You can also use Quasar CRM, a white-label platform." } },
                { "@type": "Question", name: "What systems can Victor Melo integrate?", acceptedAnswer: { "@type": "Answer", text: "Any system with an API: Stripe, Asaas, ClickUp, ZapSign, WhatsApp, Meta Ads, Google Ads, n8n, Zapier, and many more." } },
                { "@type": "Question", name: "How does payment work?", acceptedAnswer: { "@type": "Answer", text: "Payment is milestone-based. Accepted methods: Stripe, Wise, wire transfer, and PIX. Contracts are signed digitally via ZapSign." } },
              ],
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
        <TrackingEvents />

        {/* Tracking — deferred 3s after page load to not block LCP */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function loadTracking(){
                // GA4
                var g=document.createElement('script');g.async=1;
                g.src='https://www.googletagmanager.com/gtag/js?id=G-8ZQTSMLSL5';
                document.head.appendChild(g);
                window.dataLayer=window.dataLayer||[];
                function gtag(){dataLayer.push(arguments)}
                gtag('js',new Date());gtag('config','G-8ZQTSMLSL5');

                // Meta Pixel
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
                (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
                fbq('init','1748155102819418',{},{agent:'cloudflare-victormelo'});
                fbq('track','PageView');
                fbq('set','autoConfig',true,'1748155102819418');

                // Clarity
                (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})
                (window,document,"clarity","script","w8kztii3o2");
              }
              if(document.readyState==='complete'){setTimeout(loadTracking,3000)}
              else{window.addEventListener('load',function(){setTimeout(loadTracking,3000)})}
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1748155102819418&ev=PageView&noscript=1" alt="" />
        </noscript>
      </body>
    </html>
  );
}
