const config = {
  defaultTitle: 'John Doe',
  url:
    process.env.NODE_ENV !== 'development'
      ? process.env.NEXT_PUBLIC_VERCEL_URL
      : 'http://localhost:3040',
  defaultDescription: 'I’m John and I’m a Backend & Devops engineer!',
  googleAnalyticsID: 'G-PE8QW0ZGTZ',
};

export default config;
