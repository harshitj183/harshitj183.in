'use client';

import Script from 'next/script';

export default function GoogleAdsense() {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  // Only render the AdSense script if we have an ID (and implicitly in production)
  if (!adsenseId) {
    return null;
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
      onLoad={() => {
        console.log('Google AdSense initialized with ID:', adsenseId);
      }}
      onError={() => {
        console.error('Failed to load Google AdSense script');
      }}
    />
  );
}
