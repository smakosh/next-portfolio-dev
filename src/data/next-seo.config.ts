import config from 'data/config';

const seoConfig = {
  title: config.defaultTitle,
  description: config.defaultDescription,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: config.url,
    siteName: `${config.defaultTitle} Portfolio`,
    images: [
      {
        url: `${config.url}/assets/thumbnail/thumbnail.png`,
        width: 1200,
        height: 600,
        alt: config.defaultDescription,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: config.twitter,
    site: config.twitter,
    cardType: 'summary_large_image',
  },
};

export default seoConfig;
