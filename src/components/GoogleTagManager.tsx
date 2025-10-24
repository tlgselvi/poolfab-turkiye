import React from 'react'

interface GoogleTagManagerProps {
  gtmId?: string
}

const GoogleTagManager: React.FC<GoogleTagManagerProps> = ({ 
  gtmId = import.meta.env.VITE_GTM_ID || 'GTM-XXXXXXX'
}) => {
  if (!gtmId || gtmId === 'GTM-XXXXXXX') {
    return null
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}

export default GoogleTagManager
