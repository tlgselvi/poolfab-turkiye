import React from 'react'

interface GoogleAnalyticsProps {
  measurementId?: string
  gtmId?: string
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ 
  measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID',
  gtmId = import.meta.env.VITE_GTM_ID || 'GTM-XXXXXXX'
}) => {
  return (
    <>
      {/* Google Analytics */}
      {measurementId && measurementId !== 'GA_MEASUREMENT_ID' && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${measurementId}');
              `,
            }}
          />
        </>
      )}

      {/* Google Tag Manager */}
      {gtmId && gtmId !== 'GTM-XXXXXXX' && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}
    </>
  )
}

export default GoogleAnalytics
