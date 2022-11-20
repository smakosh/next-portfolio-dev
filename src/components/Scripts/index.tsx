'use client';

import Script from 'next/script';
import config from 'data/config';

const Scripts = () => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsID}`}
    />
    <Script
      id="gtag"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${config.googleAnalyticsID}', {
							page_path: window.location.pathname,
						});
					`,
      }}
    />
  </>
);

export default Scripts;
