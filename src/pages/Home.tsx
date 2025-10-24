import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Clock, Award, Users, CheckCircle } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  POOLFAB TÜRKİYE - 
                  <span className="text-primary-600 block">PREMIUM HAVUZ ÇÖZÜMLERİ</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Türkiye'nin önde gelen havuz uzmanı olarak, 360° çözümler, kapsamlı hizmet, 
                  planlama, sonrası bakım ve garantiler ile özel yüzme deneyimi sunuyoruz.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/iletisim" className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                  <span>TEKLİF AL</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/showroom" className="btn-secondary text-lg px-8 py-4">
                  Showroom Ziyareti
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>4.850 değerlendirme</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Yaşam boyu garanti</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary-600 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">P</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Premium Havuz Çözümleri</h3>
                    <p className="text-gray-600">Türkiye'nin en kaliteli havuz teknolojisi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Neden PoolFab Türkiye?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yüksek müşteri memnuniyeti, yaşam boyu garanti ve 360° hizmet anlayışımızla 
              size en iyi havuz deneyimini sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Yüksek Müşteri Memnuniyeti</h3>
              <p className="text-gray-600">
                Müşteri memnuniyeti bizim için her zaman önceliktir. Tek elden hizmet 
                alırsınız ve yakınınızdaki havuz uzmanımız tarafından desteklenirsiniz.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Hızlı Kurulum</h3>
              <p className="text-gray-600">
                Birinci sınıf proje planlama ve deneyimli havuz uzmanlarımızın uygulaması 
                sayesinde PP havuzunuzu 3 iş gününde kurabiliriz.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Yaşam Boyu Garanti</h3>
              <p className="text-gray-600">
                Yüksek kaliteli tam vinil ester havuz kabuklarımız sayesinde, 
                havuz kabuğunun sızdırmazlığı ve kabarcık oluşumuna karşı yaşam boyu garanti sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LPW Pools Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                LPW Havuzlar – Sınıfının En İyisi Hazır Havuzlar
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-600">60 YIL DENEYİM</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tüm önceden üretilmiş havuzlarımız, en yüksek kaliteyi garanti etmek için 
                  Belçika'da üretilmektedir. 60 yıllık deneyim ve bilgimizin en iyisini 
                  sunmamızı sağlayan uzlaşmasız kalite kontrolüne tabidirler.
                </p>
              </div>
              <Link to="/urunler/lpw-pools" className="btn-primary">
                LPW Havuz Modelleri
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">L</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">LPW Havuz Teknolojisi</h3>
                    <p className="text-gray-600">Belçika kalitesi, Türkiye'de</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Covrex Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-green-600 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">C</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Covrex Havuz Örtüleri</h3>
                    <p className="text-gray-600">Otomatik güvenlik örtüleri</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Covrex® - Otomatik Havuz Örtüleri
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-600">GÜNEŞ VE GÜVENLİK ÖRTÜLERİ</h3>
                <p className="text-gray-600 leading-relaxed">
                  Covrex® otomatik havuz örtüleri, 40 yılı aşkın deneyimin sonucudur ve 
                  modern havuz örtü teknolojisine, işlevsellik, güvenlik ve kaliteye yol açmıştır.
                </p>
              </div>
              <Link to="/urunler/covrex" className="btn-primary">
                Covrex Havuz Örtüleri
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              PoolFab Türkiye Rakamları
            </h2>
            <p className="text-xl text-primary-100">
              Türkiye'deki başarılı havuz projelerimiz
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">500+</div>
              <div className="text-primary-100">LPW HAVUZ PROJESİ</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">300+</div>
              <div className="text-primary-100">TÜRKİYE PROJESİ</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">60</div>
              <div className="text-primary-100">YIL HAVUZ ÜRETİMİ</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">3</div>
              <div className="text-primary-100">TÜRKİYE SHOWROOM</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Hemen Teklif Alın
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PoolFab Türkiye, projenizin her adımında yanınızda. Showroom'umuzu ziyaret edin 
              ve kişisel danışmanlık alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/iletisim" className="btn-primary text-lg px-8 py-4">
                Teklif Al
              </Link>
              <Link to="/showroom" className="btn-secondary text-lg px-8 py-4">
                Showroom Ziyareti
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
