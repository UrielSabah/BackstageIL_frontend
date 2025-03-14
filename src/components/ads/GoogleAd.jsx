import React, { useEffect } from 'react';

export default function GoogleAd({ slot, format = "auto", responsive = true }) {
  useEffect(() => {
    // Load Google Ads script if not already loaded
    if (!window.adsbygoogle) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    // Initialize ads
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('Error loading Google Ad:', error);
    }
  }, []);

  return (
    <div className="ad-container">
      <span className="ad-label">Advertisement</span>
      <div className="ad-content">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client="ca-pub-5180562433868686" // Replace with your actual ad client ID
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive}
        ></ins>
      </div>
    </div>
  );
}