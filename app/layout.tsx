import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Geist,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";

/* Main body font */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

/* Code and technical text font */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* Premium formal heading font */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* Website SEO information */
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://rumuna-website.vercel.app"
  ),

  title: {
    default: "RUMUNA | Rajshahi University Model United Nations Association",
    template: "%s | RUMUNA",
  },

  description:
    "Rajshahi University Model United Nations Association promotes diplomacy, leadership, critical thinking, and meaningful global dialogue among students.",

  keywords: [
    "RUMUNA",
    "Rajshahi University Model United Nations Association",
    "Rajshahi University MUN",
    "Model United Nations Bangladesh",
    "Student Leadership",
    "Diplomacy",
    "Youth Conference",
  ],

  authors: [
    {
      name: "Rajshahi University Model United Nations Association",
    },
  ],

  creator: "RUMUNA",
  publisher: "RUMUNA",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "RUMUNA",
    title: "RUMUNA | Leadership Through Diplomacy",
    description:
      "Empowering future leaders through diplomacy, dialogue, collaboration, and Model United Nations activities.",
    images: [
      {
        url: "/rumuna-logo.png",
        width: 512,
        height: 512,
        alt: "RUMUNA Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RUMUNA | Leadership Through Diplomacy",
    description: "Rajshahi University Model United Nations Association.",
    images: ["/rumuna-logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

/* Mobile browser appearance */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#071A33",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Rajshahi University Model United Nations Association",
    alternateName: "RUMUNA",
    url: "https://rumuna-website.vercel.app",
    logo: "https://rumuna-website.vercel.app/rumuna-logo.png",
    sameAs: [
      "https://facebook.com/RUMUNA",
      "https://instagram.com/rumuna_official",
      "https://linkedin.com/company/rumuna",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rajshahi",
      postalCode: "6205",
      addressCountry: "BD",
    },
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "University of Rajshahi",
    },
  };

  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${cormorant.variable}
        h-full
        scroll-smooth
        antialiased
      `}
    >
      <body
        className="
          min-h-screen
          overflow-x-hidden
          bg-background
          font-sans
          text-foreground
        "
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}