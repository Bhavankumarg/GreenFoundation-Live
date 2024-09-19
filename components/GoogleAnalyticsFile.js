import React from 'react'

const GoogleAnalyticsFile = () => {
  return (
    <html lang="en">
        <head>
          {/* <title>
            Agro-biodiversity conservation platform fostering sustainable
            agriculture
          </title>
          <meta
            name="description"
            content="Green Foundation works towards the conservation of indigenous seed varieties and helps promote sustainable agriculture through agro bio diversity conservation"
          /> */}
          <meta http-equiv="content-language" content="en" />
          <meta name="robots" content="index,follow" />
          {/* <link rel="canonical" href="https://greenfoundation.in/" /> */}

        {/* Google Analytics */}
        <script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-H8HNQPTQW0`}
        />

        <script strategy="afterInteractive" id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-H8HNQPTQW0');
          `}
        </script>

        {/* Google Tag Manager */}
        <script strategy="afterInteractive" id="google-tag-manager">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window, document, 'script', 'dataLayer', 'GTM-5J2C4PF');
          `}
        </script>
        </head>

        
        <body>
          <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5J2C4PF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* Google Tag Manager Ended */}
          </body>
      </html>
  )
}

export default GoogleAnalyticsFile