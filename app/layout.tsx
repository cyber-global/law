import type { Metadata } from "next";
import { Inter, Lexend, Geist_Mono } from "next/font/google";
import { AnalyticsProvider } from '@/components/analytics-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/seo';
import "./globals.css";

// Inter for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Lexend for display/headings
const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

// Geist Mono for code
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cybergloballaw.com';

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - When cyber risk turns legal, speed and defensibility matter`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_NAME} - When cyber risk turns legal, speed and defensibility matter`,
    description: SITE_DESCRIPTION,
    url: baseUrl,
    siteName: SITE_NAME,
    images: [
      {
        url: '/api/og?title=CyberGlobal Law&subtitle=When cyber risk turns legal, speed and defensibility matter&page=home',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - When cyber risk turns legal, speed and defensibility matter`,
    description: SITE_DESCRIPTION,
    images: ['/api/og?title=CyberGlobal Law&subtitle=When cyber risk turns legal, speed and defensibility matter&page=home'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${lexend.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <AnalyticsProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
