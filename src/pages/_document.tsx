import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
