import { useEffect } from 'react';

const GoogleAd = ({ adSlot, width = 728, height = 90, style = {} }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("Adsense error:", e);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block', width: `${width}px`, height: `${height}px`, ...style }}
            data-ad-client="ca-pub-5180562433868686"  // Your AdSense client ID
            data-ad-slot={adSlot}
            data-ad-format="horizontal"  // Explicit horizontal ad format
            data-full-width-responsive="false"  // Disable responsive scaling
        />
    );
};

export default GoogleAd;
