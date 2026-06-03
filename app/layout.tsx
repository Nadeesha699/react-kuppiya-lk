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
  title: {
    default: "Kuppiya",
    template: "%s | Kuppiya",
  },

  description:
    "Your daily bite of facts, tech rumors, hidden stories and trending insights.",

  metadataBase: new URL("https://kuppiya-lk.vercel.app"),

  keywords: [
    "Kuppiya",
    "tech news",
    "facts",
    "hidden stories",
    "technology",
    "Sri Lanka",
    "trending news",
  ],

  // ✅ ICON (THIS FIXES app/icon.png USAGE)
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Kuppiya",
    description:
      "Your daily bite of facts, tech rumors, hidden stories and trending insights.",
    url: "https://kuppiya-lk.vercel.app",
    siteName: "Kuppiya",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kuppiya",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kuppiya",
    description:
      "Your daily bite of facts, tech rumors and hidden stories.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "PASTE_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}