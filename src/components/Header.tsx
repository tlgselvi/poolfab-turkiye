import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+90 212 123 45 67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@poolfab.com.tr</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>4.850 müşteri değerlendirmesi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">PoolFab</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Ana Sayfa
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center space-x-1">
                <span>Ürünler</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link to="/urunler" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Havuzlar</Link>
                  <Link to="/urunler/lpw-pools" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">LPW Havuzlar</Link>
                  <Link to="/urunler/flexline" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Flexline Havuzlar</Link>
                  <Link to="/urunler/covrex" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Covrex Havuz Örtüleri</Link>
                  <Link to="/urunler/garantiler" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Garantiler</Link>
                </div>
              </div>
            </div>
            <Link to="/hakkimizda" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Hakkımızda
            </Link>
            <Link to="/showroom" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Showroom
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Blog
            </Link>
            <Link to="/iletisim" className="btn-primary">
              Teklif Al
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Ana Sayfa
              </Link>
              <Link to="/urunler" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Ürünler
              </Link>
              <Link to="/hakkimizda" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Hakkımızda
              </Link>
              <Link to="/showroom" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Showroom
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Blog
              </Link>
              <Link to="/iletisim" className="btn-primary text-center">
                Teklif Al
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
