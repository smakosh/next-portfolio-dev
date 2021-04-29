import config from 'data/config';
import { NextSeo } from 'next-seo';

const { url, defaultDescription, defaultTitle } = config;

const SEO = ({
  location = url,
  title = defaultTitle,
  description = defaultDescription,
}) => (
  <NextSeo
    title={title}
    description={description}
    additionalMetaTags={[
      {
        name: 'image',
        content: `${url}/assets/thumbnail/thumbnail.png`,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:url',
        content: `${url}${location}`,
      },
      {
        property: 'og:image',
        content: `${url}/assets/thumbnail/thumbnail.png`,
      },
      {
        name: 'twitter:url',
        content: `${url}${location}`,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image:src',
        content: `${url}/assets/thumbnail/thumbnail.png`,
      },
      {
        name: 'twitter:image',
        content: `${url}/assets/thumbnail/thumbnail.png`,
      },
    ]}
  />
);

export default SEO;
