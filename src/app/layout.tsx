import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Roboto } from 'next/font/google';
import config from 'data/config';
import 'components/ui/globals.css';
import { cn } from 'lib/utils';

const { url, defaultDescription, defaultTitle, twitter } = config;

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  metadataBase: new URL(url || "https://www.gauravraut.com"),
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url,
    siteName: defaultTitle,
    images: [
      {
        url: '/assets/thumbnail/thumbnail.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  icons: {
    icon: '/assets/favicon/favicon-32x32.png',
    shortcut: '/assets/favicon/favicon.ico',
    apple: '/assets/favicon/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    creator: twitter,
    title: defaultTitle,
    description: defaultDescription,
    site: url,
    images: '/assets/thumbnail/thumbnail.png',
  },
  manifest: '/assets/favicon/site.webmanifest',
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

type RootLayoutProps = {
  children: ReactNode;
};

export const revalidate = 3600;

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('bg-background min-h-screen font-sans antialiased scroll-smooth', roboto.variable)}>
      {children}
    </body>
    <GoogleAnalytics gaId={config.googleAnalyticsID} />
  </html>
);

export default RootLayout;
