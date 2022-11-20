import { NextSeoProps } from 'next-seo';

const seoConfig: NextSeoProps = {
  title: 'John Doe',
  description: 'I’m John and I’m a Backend & Devops engineer!',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-next.smakosh.com/',
    siteName: 'Portfolio Next',
    images: [
      {
        url: 'https://portfolio-next.smakosh.com/assets/thumbnail/thumbnail.png',
        width: 1200,
        height: 600,
        alt: 'I’m John and I’m a Backend & Devops engineer!',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@smakosh',
    site: '@smakosh',
    cardType: 'summary_large_image',
  },
};

export default seoConfig;
