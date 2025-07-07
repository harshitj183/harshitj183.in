import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Harshit Jaiswal - Web Developer & Student",
  description: "Portfolio of Harshit Jaiswal - Web Developer, Programmer, and Computer Science Student passionate about creating exceptional web experiences",
  keywords: ["Harshit Jaiswal", "Web Developer", "React", "Next.js", "TypeScript", "JavaScript", "Frontend Developer", "Full Stack Developer"],
  authors: [{ name: "Harshit Jaiswal", url: "https://www.harshitj183.in" }],
  creator: "Harshit Jaiswal",
  metadataBase: new URL('https://www.harshitj183.in'),
  openGraph: {
    title: "Harshit Jaiswal - Web Developer & Student",
    description: "Portfolio of Harshit Jaiswal - Web Developer, Programmer, and Computer Science Student passionate about creating exceptional web experiences",
    url: "https://www.harshitj183.in",
    siteName: "Harshit Jaiswal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Jaiswal - Web Developer & Student",
    description: "Portfolio of Harshit Jaiswal - Web Developer, Programmer, and Computer Science Student passionate about creating exceptional web experiences",
    creator: "@harshitj183",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'google-adsense-account': 'ca-pub-9029687078071299',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9029687078071299"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
