import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import ThemeProvider from 'providers/ThemeProvider';
import SEO from 'data/next-seo.config';
import 'components/ui/fonts.css';

const MyApp = ({ Component, pageProps, err }: AppProps & { err: any }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      (window as any).gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider>
      <DefaultSeo
        {...SEO}
        additionalMetaTags={[
          {
            property: 'twitter:image',
            content: `${
              process.env.NODE_ENV !== 'development'
                ? process.env.NEXT_PUBLIC_PORTFOLIO_URL
                : ''
            }/twitter-cover.png`,
          },
          {
            property: 'og:type',
            content: 'website',
          },
        ]}
      />
      <Component {...pageProps} err={err} />
    </ThemeProvider>
  );
};

export default MyApp;
