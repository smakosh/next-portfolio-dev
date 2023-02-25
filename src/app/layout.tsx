import { ReactNode } from 'react';
import config from 'data/config';
import type { Metadata } from 'next';
import { Roboto } from '@next/font/google';
import 'components/ui/globals.css';

const { url, defaultDescription, defaultTitle, twitter } = config;

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url,
    siteName: defaultTitle,
    images: [
      {
        url: `${url}/assets/thumbnail/thumbnail.png`,
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
  themeColor: '#6b63ff',
  twitter: {
    card: 'summary_large_image',
    creator: twitter,
    title: defaultTitle,
    description: defaultDescription,
    site: url,
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

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" className={`${roboto.variable} font-sans scroll-smooth`}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
