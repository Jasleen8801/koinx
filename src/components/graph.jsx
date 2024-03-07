import React, { useEffect, useRef, memo } from 'react';

const TradingViewWidget = memo(() => {
  const container = useRef();

  useEffect(() => {
    if (!window.TradingView) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "timezone": "Etc/UTC",
          "interval": "W",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "hide_legend": true,
          "range": "5D",
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com",
          "container_id": "tradingview-widget-container__widget"
        }`;

      container.current.appendChild(script);

      window.TradingView = true;
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ width: "100%", height:"400px", transform: "scaleX(-1)" }}></div>
    </div>
  );
});

export default TradingViewWidget;
