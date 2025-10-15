import type React from "react";
import type { Metadata } from "next";
import { Urbanist, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next"

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
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
    "real estate Cairo",
    "real estate",
    "real estate Dubai",
    "luxury properties Egypt",
    "luxury properties UAE",
    "villas for sale Cairo",
    "apartments for sale Dubai",
    "real estate investment",
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
  metadataBase: new URL("http://livoraproperties.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "ar-EG": "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG", "ar_AE"],
    url: "http://livoraproperties.com",
    siteName: "Livora Properties",
    title: "Livora Properties | Premium Real Estate in Egypt & UAE",
    description:
      "From Dubai to Cairo — Your Real Estate Journey Starts Here. Expert real estate consultancy connecting investors with premium opportunities.",
    images: [
      {
        url: "https://res.cloudinary.com/dd1bi4lzz/image/upload/v1760106292/PNG-2_epejtw.png",
        width: 1200,
        height: 630,
        alt: "Livora Properties - Luxury Real Estate",
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
    creator: "@livora", // Replace with your actual Twitter handle
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
      {
        url: "https://res.cloudinary.com/dd1bi4lzz/image/upload/v1760106292/PNG-2_epejtw.png",
      },
      {
        url: "https://res.cloudinary.com/dd1bi4lzz/image/upload/v1760106292/PNG-2_epejtw.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://res.cloudinary.com/dd1bi4lzz/image/upload/v1760106292/PNG-2_epejtw.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut:
      "https://res.cloudinary.com/dd1bi4lzz/image/upload/v1760106292/PNG-2_epejtw.png",
    apple: {
      url: "https://res.cloudinary.com/dd1bi4lzz/image/upload/v1760106292/PNG-2_epejtw.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${urbanist.variable} ${cairo.variable} antialiased`}>
      <head>
        {/* Additional meta tags for Arabic support */}
        <meta httpEquiv="Content-Language" content="en, ar" />
        <meta name="language" content="English, Arabic" />

        {/* Geo Tags */}
        <meta name="geo.region" content="EG" />
        <meta name="geo.placename" content="Cairo" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai" />

        {/* Business Information */}
        <meta
          property="business:contact_data:street_address"
          content="Cairo & Dubai"
        />
        <meta property="business:contact_data:locality" content="Cairo" />
        <meta property="business:contact_data:region" content="Egypt" />
        <meta property="business:contact_data:country_name" content="Egypt" />
      </head>
      <body>
        <LanguageProvider>
          <Analytics/>
          <Navigation />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}