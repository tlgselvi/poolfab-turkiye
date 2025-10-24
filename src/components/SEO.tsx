import React from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const SEO: React.FC<SEOProps> = ({
  title = 'PoolFab Türkiye - Premium Havuz Çözümleri',
  description = 'PoolFab Türkiye - Premium havuz çözümleri, LPW Pools, Covrex havuz örtüleri ve 360° havuz hizmetleri. Türkiye\'nin önde gelen havuz uzmanı.',
  keywords = 'havuz, pool, LPW Pools, Covrex, havuz örtüsü, havuz yapımı, İstanbul havuz, Ankara havuz, premium havuz, yaşam boyu garanti',
  image = 'https://poolfab.com.tr/og-image.jpg',
  url = 'https://poolfab.com.tr',
  type = 'website'
}) => {
  return (
    <>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="PoolFab Türkiye" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="tr" />
      <meta name="geo.region" content="TR" />
      <meta name="geo.placename" content="İstanbul" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="PoolFab Türkiye" />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </>
  )
}

export default SEO
