import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import ThemeProvider from 'providers/ThemeProvider';
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
      <Component {...pageProps} err={err} />
    </ThemeProvider>
  );
};

export default MyApp;
