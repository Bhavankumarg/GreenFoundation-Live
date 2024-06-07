import Head from 'next/head'
import '../components/Style'
import Script from 'next/script'

//import Gtag from '../components/SeoComponents/GoogleAnalyticsCode'

// export const metadata = {
//   title: 'Agro-biodiversity conservation platform fostering sustainable agriculture',
//   description: 'Green Foundation works towards the conservation of indigenous seed varieties and helps promote sustainable agriculture through agro bio diversity conservation',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
      <title>Agro-biodiversity conservation platform fostering sustainable agriculture</title>
        <meta name="description" content="Green Foundation works towards the conservation of indigenous seed varieties and helps promote sustainable agriculture through agro bio diversity conservation"></meta>
        <meta http-equiv="content-language" content="en"></meta>
        <meta name="robots" content="index,follow"></meta>
        <link rel="canonical" href="https://greenfoundation.in/" />

      </head>

      {/* <script strategy="afterInteractive" id="google-code"
        src={`https://www.googletagmanager.com/gtag/js?id='G-H8HNQPTQW0'`}>
      </script>

      <script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
            wgtag('js', new Date());
          gtag('config', 'G-H8HNQPTQW0');
        `}</script> */}

      <script id="google-tag-manager-start">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5J2C4PF');
        `}
      </script>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5J2C4PF"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>


      <body>
        {children}
      </body>
    </html>
  )
}

