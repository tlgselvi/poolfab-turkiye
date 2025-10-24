import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, ArrowRight, Star } from 'lucide-react'

const Showrooms: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Showroom'larımız
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Havuzunuzu satın almadan önce showroom'larımızı ziyaret edin. 
              Uzman danışmanlarımız tüm sorularınızı yanıtlayacak.
            </p>
          </div>
        </div>
      </section>

      {/* Showroom Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Showroom'larımızı Ziyaret Edin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gelecekteki havuzunuzu satın almadan önce showroom'larımızda görebilir ve test edebilirsiniz. 
              Teknik danışmanlarımız LPW Havuzlar hakkındaki tüm sorularınızı yanıtlayacak.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* İstanbul Showroom */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">İ</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">İstanbul Showroom</h3>
                  <p className="text-gray-600">Ana Showroom</p>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Adres</h4>
                      <p className="text-gray-600">
                        Maslak Mahallesi, Büyükdere Caddesi No:123<br />
                        Sarıyer/İstanbul, Türkiye
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefon</h4>
                      <p className="text-gray-600">+90 212 123 45 67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Çalışma Saatleri</h4>
                      <p className="text-gray-600">
                        Pazartesi - Cuma: 09:00 - 18:00<br />
                        Cumartesi: 09:00 - 16:00<br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-lg p-4">
                  <h5 className="font-semibold text-primary-900 mb-2">Öne Çıkan Özellikler</h5>
                  <ul className="space-y-1 text-sm text-primary-700">
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>LPW Havuz modelleri sergisi</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>Covrex havuz örtüleri demo</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>Uzman danışmanlık</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>Ücretsiz proje danışmanlığı</span>
                    </li>
                  </ul>
                </div>

                <Link to="/iletisim" className="btn-primary w-full flex items-center justify-center space-x-2">
                  <span>Randevu Al</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Ankara Showroom */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-green-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">A</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Ankara Showroom</h3>
                  <p className="text-gray-600">Bölge Showroom</p>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Adres</h4>
                      <p className="text-gray-600">
                        Çankaya Mahallesi, Tunalı Hilmi Caddesi No:45<br />
                        Çankaya/Ankara, Türkiye
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefon</h4>
                      <p className="text-gray-600">+90 312 123 45 67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Çalışma Saatleri</h4>
                      <p className="text-gray-600">
                        Pazartesi - Cuma: 09:00 - 18:00<br />
                        Cumartesi: 09:00 - 16:00<br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h5 className="font-semibold text-green-900 mb-2">Öne Çıkan Özellikler</h5>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>Flexline havuz modelleri</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>OFYR outdoor çözümleri</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>Teknik destek</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>Proje planlama</span>
                    </li>
                  </ul>
                </div>

                <Link to="/iletisim" className="btn-primary w-full flex items-center justify-center space-x-2">
                  <span>Randevu Al</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Showroom */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Neden Showroom'umuzu Ziyaret Etmelisiniz?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showroom ziyareti, havuz projeniz için en doğru kararı vermenizi sağlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Görsel Deneyim</h3>
              <p className="text-gray-600">
                Havuz modellerini gerçek boyutlarda görün, dokunun ve deneyimleyin.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Uzman Danışmanlık</h3>
              <p className="text-gray-600">
                Teknik danışmanlarımızdan kişisel öneriler ve çözümler alın.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Proje Planlama</h3>
              <p className="text-gray-600">
                Bahçenize özel havuz çözümleri ve detaylı proje planlaması.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Fiyat Bilgisi</h3>
              <p className="text-gray-600">
                Detaylı fiyat listesi ve özel teklifler hakkında bilgi alın.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Garanti Bilgisi</h3>
              <p className="text-gray-600">
                Yaşam boyu garanti ve hizmet koşulları hakkında detaylı bilgi.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Kurulum Süreci</h3>
              <p className="text-gray-600">
                Kurulum süreci, zaman çizelgesi ve proje takibi hakkında bilgi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Showroom Randevusu Alın
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Uzman danışmanlarımızla tanışın ve havuz projenizi birlikte planlayın. 
            Showroom ziyareti için randevu alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/iletisim" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Randevu Al
            </Link>
            <Link to="/urunler" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Ürünleri İncele
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Showrooms
