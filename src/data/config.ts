const config = {
  defaultTitle: 'John Doe',
  url: process.env.NODE_ENV !== 'development' ? process.env.NEXT_PUBLIC_PORTFOLIO_URL : 'http://localhost:3040',
  defaultDescription: 'I’m John and I’m a Backend & Devops engineer!',
  googleAnalyticsID: 'G-PE8QW0ZGTZ',
  NEXT_PUBLIC_PORTFOLIO_URL: process.env.NEXT_PUBLIC_PORTFOLIO_URL,
};

export default config;
