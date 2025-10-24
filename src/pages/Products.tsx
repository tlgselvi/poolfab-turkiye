import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Clock, Award } from 'lucide-react'

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Premium Havuz Ürünleri
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LPW Pools teknolojisi, Covrex havuz örtüleri ve OFYR outdoor çözümleri ile 
              size en kaliteli havuz deneyimini sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* LPW Pools */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">L</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">LPW Havuzlar</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">LPW Havuzlar</h3>
                <p className="text-gray-600">
                  Belçika'da üretilen premium havuzlar. 60 yıllık deneyim ve en yüksek kalite standartları.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Yaşam boyu garanti</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Tam vinil ester yapı</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>3 günde kurulum</span>
                  </li>
                </ul>
                <Link to="/urunler/lpw-pools" className="btn-primary w-full flex items-center justify-center space-x-2">
                  <span>Detayları Gör</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Flexline Pools */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-green-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">F</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Flexline Havuzlar</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Flexline Havuzlar</h3>
                <p className="text-gray-600">
                  Modern tasarım ve esnek konfigürasyon seçenekleri ile her bahçeye uygun havuzlar.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-purple-500" />
                    <span>Modern tasarım</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Yüksek dayanıklılık</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>Hızlı kurulum</span>
                  </li>
                </ul>
                <Link to="/urunler/flexline" className="btn-primary w-full flex items-center justify-center space-x-2">
                  <span>Detayları Gör</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Covrex Covers */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">C</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Covrex Örtüler</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Covrex Havuz Örtüleri</h3>
                <p className="text-gray-600">
                  Otomatik güvenlik ve güneş örtüleri. 40 yıllık deneyim ile geliştirilmiş teknoloji.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Güvenlik örtüsü</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Güneş enerjisi</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-purple-500" />
                    <span>Otomatik sistem</span>
                  </li>
                </ul>
                <Link to="/urunler/covrex" className="btn-primary w-full flex items-center justify-center space-x-2">
                  <span>Detayları Gör</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* OFYR Outdoor Kitchen */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-orange-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">O</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">OFYR Outdoor</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">OFYR Outdoor Kitchen</h3>
                <p className="text-gray-600">
                  Premium outdoor mutfak çözümleri. Havuzunuzun yanında mükemmel outdoor deneyimi.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-purple-500" />
                    <span>Premium malzeme</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Hava koşullarına dayanıklı</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Modern tasarım</span>
                  </li>
                </ul>
                <Link to="/urunler/ofyr" className="btn-primary w-full flex items-center justify-center space-x-2">
                  <span>Detayları Gör</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-red-600 rounded-full mx-auto flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Garantiler</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Kapsamlı Garantiler</h3>
                <p className="text-gray-600">
                  Tüm ürünlerimiz için kapsamlı garanti paketleri. Yaşam boyu havuz kabuğu garantisi.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Yaşam boyu garanti</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Kabarcık koruması</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-purple-500" />
                    <span>Elektrik garantisi</span>
                  </li>
                </ul>
                <Link to="/urunler/garantiler" className="btn-primary w-full flex items-center justify-center space-x-2">
                  <span>Detayları Gör</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Escape */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-teal-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">E</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Escape®</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Escape® Serisi</h3>
                <p className="text-gray-600">
                  Özel tasarım havuz çözümleri. Benzersiz outdoor yaşam deneyimi için.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-purple-500" />
                    <span>Özel tasarım</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Lüks çözümler</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Premium kalite</span>
                  </li>
                </ul>
                <Link to="/urunler/escape" className="btn-primary w-full flex items-center justify-center space-x-2">
                  <span>Detayları Gör</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Size Uygun Havuz Çözümünü Bulun
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Uzman ekibimiz size en uygun havuz çözümünü bulmanızda yardımcı olacak. 
            Showroom'umuzu ziyaret edin ve ürünlerimizi yakından görün.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/iletisim" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Teklif Al
            </Link>
            <Link to="/showroom" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Showroom Ziyareti
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
