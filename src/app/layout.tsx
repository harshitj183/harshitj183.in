import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import DesktopSidebar from "@/components/DesktopSidebar";
import MobileNavigation from "@/components/MobileNavigation";
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
  title: "Harshit Jaiswal - Web Developer & Computer Science Student",
  description: "Portfolio of Harshit Jaiswal (@harshitj183) - Freelance Web Developer with 24+ completed projects, WordPress & AI Intern, Computer Science Student at K.R. Mangalam University. Specializing in JavaScript, PHP, React, and innovative web solutions.",
  keywords: ["Harshit Jaiswal", "harshitj183", "Web Developer", "Freelancer", "React", "PHP", "JavaScript", "WordPress", "AI", "Computer Science Student", "K.R. Mangalam University", "SenpaiHost", "CodeAlpha"],
  authors: [{ name: "Harshit Jaiswal", url: "https://www.harshitj183.in" }],
  creator: "Harshit Jaiswal (@harshitj183)",
  metadataBase: new URL('https://www.harshitj183.in'),
  openGraph: {
    title: "Harshit Jaiswal - Web Developer & Computer Science Student",
    description: "Portfolio of Harshit Jaiswal (@harshitj183) - Freelance Web Developer with 24+ completed projects, WordPress & AI Intern, Computer Science Student passionate about creating innovative web solutions.",
    url: "https://www.harshitj183.in",
    siteName: "Harshit Jaiswal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Jaiswal - Web Developer & Computer Science Student",
    description: "Portfolio of Harshit Jaiswal (@harshitj183) - Freelance Web Developer with 24+ completed projects, WordPress & AI Intern, Computer Science Student passionate about creating innovative web solutions.",
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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
          <DesktopSidebar />
          <MobileNavigation />
          <main className="flex-1 lg:ml-64 pt-20 lg:pt-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
