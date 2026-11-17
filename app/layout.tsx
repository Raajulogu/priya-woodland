import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/shared/WhatsAppFloating";
import { siteConfig } from "@/config/site";
import { businessConfig } from "@/config/business";
import { getLocalBusinessSchema } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#513B2D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Priya Woodland | Antique Wooden Furniture & Craftsmanship | Auroville, Pondicherry",
    template: "%s | Priya Woodland Auroville",
  },
  description: siteConfig.description,
  keywords: siteConfig.seoKeywords,
  authors: [{ name: businessConfig.name }],
  creator: businessConfig.name,
  publisher: businessConfig.name,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "Priya Woodland | Antique Wooden Furniture & Craftsmanship | Auroville",
    description: siteConfig.description,
    siteName: businessConfig.name,
    images: [
      {
        url: "/images/hero-workshop.webp",
        width: 1200,
        height: 630,
        alt: "Priya Woodland Handcrafted Wooden Furniture Auroville",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priya Woodland | Handcrafted Furniture Auroville",
    description: siteConfig.description,
    images: ["/images/hero-workshop.webp"],
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
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.svg",
    apple: "/favicon/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = getLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lato.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F4EE] text-[#292820] selection:bg-[#513B2D] selection:text-[#F7F4EE]">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
