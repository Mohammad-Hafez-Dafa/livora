import type React from "react";
import type { Metadata } from "next";
import { Urbanist, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
  display: "swap", // ✅ أضف display swap لتحسين الأداء
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap", // ✅ أضف display swap
});

export const metadata: Metadata = {
  title: {
    default: "Livora Properties | Premium Real Estate in Egypt & UAE",
    template: "%s | Livora Properties",
  },
  description:
    "From Dubai to Cairo — Your Real Estate Journey Starts Here. Expert real estate consultancy connecting investors with premium opportunities in Egypt and UAE.",
  keywords: [
    // English Keywords
    "Livora",
    "Livora Properties",
    "Livora Real Estate",
    "real estate Cairo",
    "real estate Dubai",
    "luxury properties Egypt",
    "luxury properties UAE",
    "villas for sale Cairo",
    "apartments for sale Dubai",
    "real estate investment Egypt",
    "real estate investment Dubai",
    "property consultancy",
    "Cairo real estate agency",
    "Dubai real estate agency",
    "New Cairo properties",
    "Dubai Marina properties",
    "luxury homes Middle East",
    "investment properties",
    "penthouses for sale",
    "real estate developers Egypt",
    "real estate developers UAE",
    // Arabic Keywords
    "ليفورا",
    "ليفورا العقارية",
    "عقارات",
    "عقارات القاهرة",
    "عقارات دبي",
    "عقارات فاخرة مصر",
    "عقارات فاخرة الإمارات",
    "فلل للبيع القاهرة",
    "شقق للبيع دبي",
    "استثمار عقاري",
    "استشارات عقارية",
    "وكالة عقارات القاهرة",
    "وكالة عقارات دبي",
    "عقارات القاهرة الجديدة",
    "عقارات دبي مارينا",
    "منازل فاخرة الشرق الأوسط",
    "بنتهاوس للبيع",
    "مطورين عقاريين",
  ],
  authors: [{ name: "Livora Properties" }],
  creator: "Livora Properties",
  publisher: "Livora Properties",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://livoraproperties.com"), // ✅ غيّر لـ https
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "ar-EG": "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG", "ar_AE"],
    url: "https://livoraproperties.com",
    siteName: "Livora Properties",
    title: "Livora Properties | Premium Real Estate in Egypt & UAE",
    description:
      "From Dubai to Cairo — Your Real Estate Journey Starts Here. Expert real estate consultancy connecting investors with premium opportunities.",
    images: [
      {
        url: "https://res.cloudinary.com/dd1bi4lzz/image/upload/v1760106292/PNG-2_epejtw.png",
        width: 1200,
        height: 630,
        alt: "Livora Properties - Luxury Real Estate in Cairo and Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Livora Properties | Premium Real Estate in Egypt & UAE",
    description:
      "From Dubai to Cairo — Your Real Estate Journey Starts Here. Expert real estate consultancy.",
    images: [
      "https://res.cloudinary.com/dd1bi4lzz/image/upload/v1760106292/PNG-2_epejtw.png",
    ],
    creator: "@livora",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // ✅ أضف favicon.ico
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code", // ✅ هتحط الكود الحقيقي من Google Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${cairo.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Schema.org Structured Data - Organization */}
        <Script
          id="schema-org-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "@id": "https://livoraproperties.com/#organization",
              name: "Livora Properties",
              alternateName: ["Livora Real Estate", "ليفورا العقارية"],
              url: "https://livoraproperties.com",
              logo: {
                "@type": "ImageObject",
                url: "https://res.cloudinary.com/dd1bi4lzz/image/upload/v1760106292/PNG-2_epejtw.png",
                width: 1200,
                height: 630,
              },
              description:
                "Expert real estate consultancy connecting investors with premium opportunities in Egypt and UAE",
              telephone: ["+20 10 55 11 99 27", "+971 54 2522 769"],
              email: "Info@livoraproperties.com",
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "Cairo",
                  addressCountry: "EG",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Dubai",
                  addressCountry: "AE",
                },
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Cairo",
                },
                {
                  "@type": "City",
                  name: "Dubai",
                },
                {
                  "@type": "Country",
                  name: "Egypt",
                },
                {
                  "@type": "Country",
                  name: "United Arab Emirates",
                },
              ],
              sameAs: [
                // ✅ أضف روابط السوشيال ميديا
                "https://www.facebook.com/livoraproperties",
                "https://www.instagram.com/livora_properties",
                "https://www.linkedin.com/company/livora-properties",
                "https://twitter.com/livora",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Real Estate Properties",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Luxury Villas",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Premium Apartments",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Penthouses",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Schema.org - WebSite */}
        <Script
          id="schema-org-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://livoraproperties.com/#website",
              url: "https://livoraproperties.com",
              name: "Livora Properties",
              description:
                "Premium Real Estate in Egypt & UAE - From Dubai to Cairo",
              publisher: {
                "@id": "https://livoraproperties.com/#organization",
              },
              inLanguage: ["en", "ar"],
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://livoraproperties.com/projects?search={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Additional Language Support */}
        <link rel="alternate" hrefLang="en" href="https://livoraproperties.com" />
        <link rel="alternate" hrefLang="ar" href="https://livoraproperties.com/ar" />
        <link rel="alternate" hrefLang="x-default" href="https://livoraproperties.com" />
      </head>

      <body className="antialiased">
        <LanguageProvider>
          <Analytics />
          <Navigation />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}