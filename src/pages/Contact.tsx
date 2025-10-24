import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    budget: '',
    installationTime: '',
    message: '',
    source: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              İletişim
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Havuz projeniz için ücretsiz danışmanlık alın. Uzman ekibimiz size en uygun 
              çözümü bulmanızda yardımcı olacak.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  İletişim Bilgileri
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  PoolFab Türkiye olarak, havuz projelerinizde size en iyi hizmeti sunmak için 
                  buradayız. Uzman ekibimizle iletişime geçin ve ücretsiz danışmanlık alın.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Adres</h3>
                    <p className="text-gray-600">
                      Maslak Mahallesi, Büyükdere Caddesi No:123<br />
                      Sarıyer/İstanbul, Türkiye
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
                    <p className="text-gray-600">+90 212 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">E-posta</h3>
                    <p className="text-gray-600">info@poolfab.com.tr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Çalışma Saatleri</h3>
                    <p className="text-gray-600">
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Cumartesi: 09:00 - 16:00<br />
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Teklif Talep Formu
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Posta Kodu *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="34000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Bütçe *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Bütçe seçiniz</option>
                    <option value="50-75">50.000€ - 75.000€</option>
                    <option value="75+">75.000€ üzeri</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="installationTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Kurulum Zamanı *
                  </label>
                  <select
                    id="installationTime"
                    name="installationTime"
                    required
                    value={formData.installationTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Kurulum zamanı seçiniz</option>
                    <option value="asap">En kısa sürede</option>
                    <option value="3months">3 ay içinde</option>
                    <option value="6months">6 ay içinde</option>
                    <option value="later">Daha sonra</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">
                    Bizi nereden duydunuz? *
                  </label>
                  <select
                    id="source"
                    name="source"
                    required
                    value={formData.source}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Kaynak seçiniz</option>
                    <option value="google">Google</option>
                    <option value="facebook">Facebook</option>
                    <option value="referral">Referans</option>
                    <option value="existing">Mevcut müşteri</option>
                    <option value="exchange">Takas</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Sorularınız / Bilgiler
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Projeniz hakkında detayları paylaşın..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Teklif Talep Et</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Konumumuz
            </h2>
            <p className="text-gray-600">
              İstanbul ofisimizi ziyaret edebilir, uzman ekibimizle tanışabilirsiniz.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto" />
              <p className="text-gray-600">Harita burada görüntülenecek</p>
              <p className="text-sm text-gray-500">
                Maslak Mahallesi, Büyükdere Caddesi No:123, Sarıyer/İstanbul
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
