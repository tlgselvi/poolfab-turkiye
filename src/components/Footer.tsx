import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold">PoolFab</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              PoolFab Türkiye, premium havuz çözümleri sunan önde gelen havuz uzmanıdır. 
              LPW Pools teknolojisi ve Covrex havuz örtüleri ile 360° havuz hizmetleri.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/urunler" className="text-gray-300 hover:text-white transition-colors">Ürünler</Link></li>
              <li><Link to="/hakkimizda" className="text-gray-300 hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link to="/showroom" className="text-gray-300 hover:text-white transition-colors">Showroom</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/iletisim" className="text-gray-300 hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ürünler</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/urunler/lpw-pools" className="text-gray-300 hover:text-white transition-colors">LPW Havuzlar</Link></li>
              <li><Link to="/urunler/flexline" className="text-gray-300 hover:text-white transition-colors">Flexline Havuzlar</Link></li>
              <li><Link to="/urunler/covrex" className="text-gray-300 hover:text-white transition-colors">Covrex Havuz Örtüleri</Link></li>
              <li><Link to="/urunler/garantiler" className="text-gray-300 hover:text-white transition-colors">Garantiler</Link></li>
              <li><Link to="/urunler/ofyr" className="text-gray-300 hover:text-white transition-colors">OFYR Outdoor Kitchen</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">İstanbul Ofis</p>
                  <p className="text-gray-400">Maslak Mahallesi, Büyükdere Caddesi No:123</p>
                  <p className="text-gray-400">Sarıyer/İstanbul</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">+90 212 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">info@poolfab.com.tr</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 PoolFab Türkiye. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/gizlilik" className="text-gray-400 hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
              <Link to="/kullanim-kosullari" className="text-gray-400 hover:text-white transition-colors">
                Kullanım Koşulları
              </Link>
              <Link to="/cerez-politikasi" className="text-gray-400 hover:text-white transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
