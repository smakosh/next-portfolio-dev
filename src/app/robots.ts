import config from 'data/config';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${config.url}/sitemap.xml`,
    host: `${config.url}`,
  };
}
