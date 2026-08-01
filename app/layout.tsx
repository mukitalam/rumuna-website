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
  },

  twitter: {
    card: "summary_large_image",
    title: "RUMUNA | Leadership Through Diplomacy",
    description:
      "Rajshahi University Model United Nations Association.",
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
        {children}
      </body>
    </html>
  );
}