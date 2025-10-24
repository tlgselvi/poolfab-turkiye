import React from 'react'
import { Link } from 'react-router-dom'
import { Users, Award, Shield, Clock, Star, CheckCircle } from 'lucide-react'

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              PoolFab Türkiye Hakkında
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Türkiye'nin önde gelen havuz uzmanı olarak, premium havuz çözümleri ve 
              360° hizmet anlayışımızla müşterilerimize en iyi deneyimi sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                PoolFab Türkiye Hikayesi
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  PoolFab Türkiye, Almanya'daki başarılı PoolFab markasının Türkiye distribütörü olarak 
                  faaliyet göstermektedir. Yüksek kaliteli premium havuz çözümleri, LPW Pools teknolojisi 
                  ve Covrex havuz örtüleri ile Türkiye pazarında öncü konumdayız.
                </p>
                <p>
                  Belçika'da üretilen LPW Pools'un sertifikalı partneri olarak, 60 yıllık deneyim ve 
                  en yüksek kalite standartlarını Türkiye'ye getiriyoruz. Müşterilerimize A'dan Z'ye 
                  kapsamlı havuz hizmetleri sunuyoruz.
                </p>
                <p>
                  Özel havuz deneyimi için 360° çözümler, kapsamlı hizmet, planlama, sonrası bakım ve 
                  garantiler ile müşteri memnuniyetini ön planda tutuyoruz.
                </p>
              </div>
              <Link to="/iletisim" className="btn-primary">
                Bizimle İletişime Geçin
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary-600 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">P</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">PoolFab Türkiye</h3>
                    <p className="text-gray-600">Premium havuz çözümleri</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PoolFab Türkiye olarak hangi değerlerle çalışıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-xl bg-white shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Müşteri Odaklılık</h3>
              <p className="text-gray-600">
                Müşteri memnuniyeti bizim için her zaman önceliktir. Her müşterimiz için 
                özel çözümler geliştiriyoruz.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl bg-white shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Kalite</h3>
              <p className="text-gray-600">
                En yüksek kalite standartlarında ürünler ve hizmetler sunuyoruz. 
                Belçika kalitesi, Türkiye'de.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl bg-white shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Güvenilirlik</h3>
              <p className="text-gray-600">
                Yaşam boyu garanti ve kapsamlı hizmet anlayışımızla müşterilerimize 
                güven veriyoruz.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl bg-white shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Hız</h3>
              <p className="text-gray-600">
                3 günde kurulum, 7 günde yüzme. Hızlı ve etkili çözümlerle 
                müşterilerimizin zamanını değerli tutuyoruz.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl bg-white shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">İnovasyon</h3>
              <p className="text-gray-600">
                Sürekli gelişen teknoloji ve yenilikçi çözümlerle havuz sektöründe 
                öncü konumdayız.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl bg-white shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">360° Hizmet</h3>
              <p className="text-gray-600">
                Havuz projenizin her aşamasında yanınızdayız. Planlama, kurulum, 
                bakım ve destek hizmetleri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Uzman Ekibimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deneyimli ve uzman ekibimizle size en iyi havuz çözümlerini sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto flex items-center justify-center">
                <Users className="w-16 h-16 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Havuz Uzmanları</h3>
              <p className="text-gray-600">
                60 yıllık deneyim ve uzmanlıkla havuz projelerinizi hayata geçiriyoruz.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto flex items-center justify-center">
                <Award className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Teknik Danışmanlar</h3>
              <p className="text-gray-600">
                LPW Pools teknolojisi konusunda uzman danışmanlarımız size rehberlik ediyor.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto flex items-center justify-center">
                <Shield className="w-16 h-16 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Müşteri Hizmetleri</h3>
              <p className="text-gray-600">
                7/24 müşteri desteği ve kapsamlı hizmet anlayışımızla yanınızdayız.
              </p>
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
              Başarılarımızın sayılarla ifadesi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">500+</div>
              <div className="text-primary-100">Tamamlanan Proje</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">4.850</div>
              <div className="text-primary-100">Müşteri Değerlendirmesi</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">60</div>
              <div className="text-primary-100">Yıl Deneyim</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">100%</div>
              <div className="text-primary-100">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            PoolFab Türkiye ile Tanışın
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uzman ekibimizle tanışın ve havuz projenizi birlikte planlayalım. 
            Showroom'umuzu ziyaret edin ve ürünlerimizi yakından görün.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/showroom" className="btn-primary text-lg px-8 py-4">
              Showroom Ziyareti
            </Link>
            <Link to="/iletisim" className="btn-secondary text-lg px-8 py-4">
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
