import { ReactNode } from 'react';
import config from 'data/config';
import { NextSeo } from 'next-seo';
import { Roboto } from '@next/font/google';
import 'components/ui/globals.css';

const { url, defaultDescription, defaultTitle } = config;

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" className={`${roboto.variable} font-sans scroll-smooth`}>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="preload" href="/fonts/roboto-v18-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="" />
      <link rel="preload" href="/fonts/roboto-v18-latin-regular.woff" as="font" type="font/woff" crossOrigin="" />
      <link rel="preload" href="/fonts/roboto-v18-latin-regular.ttf" as="font" type="font/ttf" crossOrigin="" />

      <link rel="preload" href="/fonts/roboto-v18-latin-700.woff2" as="font" type="font/woff2" crossOrigin="" />
      <link rel="preload" href="/fonts/roboto-v18-latin-700.woff" as="font" type="font/woff" crossOrigin="" />
      <link rel="preload" href="/fonts/roboto-v18-latin-700.ttf" as="font" type="font/ttf" crossOrigin="" />

      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#6b63ff" />
      <NextSeo
        title={defaultTitle}
        description={defaultDescription}
        additionalMetaTags={[
          {
            name: 'image',
            content: `${url}/assets/thumbnail/thumbnail.png`,
          },
          {
            property: 'og:title',
            content: defaultTitle,
          },
          {
            property: 'og:description',
            content: defaultDescription,
          },
          {
            property: 'og:url',
            content: url,
          },
          {
            property: 'og:image',
            content: `${url}/assets/thumbnail/thumbnail.png`,
          },
          {
            name: 'twitter:url',
            content: url,
          },
          {
            name: 'twitter:title',
            content: defaultTitle,
          },
          {
            name: 'twitter:description',
            content: defaultDescription,
          },
          {
            name: 'twitter:image:src',
            content: `${url}/assets/thumbnail/thumbnail.png`,
          },
          {
            name: 'twitter:image',
            content: `${url}/assets/thumbnail/thumbnail.png`,
          },
          {
            property: 'og:type',
            content: 'website',
          },
        ]}
      />
    </head>
    <body>
      {/* <DefaultSeo
        {...SEO}
        additionalMetaTags={[
          {
            property: 'twitter:image',
            content: `${
              process.env.NODE_ENV !== 'development' ? config.NEXT_PUBLIC_PORTFOLIO_URL : ''
            }/twitter-cover.png`,
          },
          {
            property: 'og:type',
            content: 'website',
          },
        ]}
      /> */}
      {children}
    </body>
  </html>
);

export default RootLayout;
