import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Havuz Seçiminde Dikkat Edilmesi Gerekenler",
      excerpt: "Doğru havuz seçimi için dikkat edilmesi gereken temel faktörler ve uzman önerileri.",
      image: "/api/placeholder/400/250",
      date: "15 Aralık 2024",
      author: "PoolFab Uzman Ekibi",
      category: "Havuz Rehberi",
      readTime: "5 dk okuma"
    },
    {
      id: 2,
      title: "LPW Havuzların Avantajları",
      excerpt: "Belçika teknolojisi LPW havuzların geleneksel havuzlara göre üstünlükleri.",
      image: "/api/placeholder/400/250",
      date: "10 Aralık 2024",
      author: "Teknik Uzman",
      category: "Ürün Bilgisi",
      readTime: "7 dk okuma"
    },
    {
      id: 3,
      title: "Havuz Bakımı ve Koruma İpuçları",
      excerpt: "Havuzunuzu yıl boyunca temiz ve sağlıklı tutmak için pratik öneriler.",
      image: "/api/placeholder/400/250",
      date: "5 Aralık 2024",
      author: "Bakım Uzmanı",
      category: "Bakım",
      readTime: "6 dk okuma"
    },
    {
      id: 4,
      title: "Covrex Havuz Örtülerinin Faydaları",
      excerpt: "Otomatik havuz örtülerinin enerji tasarrufu ve güvenlik açısından faydaları.",
      image: "/api/placeholder/400/250",
      date: "1 Aralık 2024",
      author: "Covrex Uzmanı",
      category: "Teknoloji",
      readTime: "4 dk okuma"
    },
    {
      id: 5,
      title: "Havuz Projesi Planlama Rehberi",
      excerpt: "Havuz projenizi baştan sona planlarken dikkat edilmesi gereken adımlar.",
      image: "/api/placeholder/400/250",
      date: "25 Kasım 2024",
      author: "Proje Uzmanı",
      category: "Proje Yönetimi",
      readTime: "8 dk okuma"
    },
    {
      id: 6,
      title: "Outdoor Yaşam ve Havuz Kombinasyonu",
      excerpt: "Havuzunuzu outdoor yaşam alanınızla nasıl entegre edebilirsiniz?",
      image: "/api/placeholder/400/250",
      date: "20 Kasım 2024",
      author: "Tasarım Uzmanı",
      category: "Tasarım",
      readTime: "6 dk okuma"
    }
  ]

  const categories = [
    "Tümü",
    "Havuz Rehberi",
    "Ürün Bilgisi",
    "Bakım",
    "Teknoloji",
    "Proje Yönetimi",
    "Tasarım"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              PoolFab Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Havuz dünyasından en güncel bilgiler, uzman önerileri ve PoolFab deneyimleri. 
              Havuz projeniz için ihtiyacınız olan tüm bilgiler burada.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-primary-600 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-xl font-bold">P</span>
                    </div>
                    <p className="text-sm text-gray-600">PoolFab Blog</p>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4 text-primary-600" />
                    <span className="text-sm text-primary-600 font-medium">{post.category}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    <span>Devamını Oku</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Blog Güncellemelerini Kaçırmayın
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            En güncel havuz bilgileri, uzman önerileri ve PoolFab haberlerini 
            e-posta ile almak için abone olun.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Popüler Konular
            </h2>
            <p className="text-gray-600">
              En çok okunan blog konularımız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Havuz Seçimi</h3>
              <p className="text-sm text-gray-600">Doğru havuz seçimi rehberi</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Bakım İpuçları</h3>
              <p className="text-sm text-gray-600">Havuz bakım rehberi</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Teknoloji</h3>
              <p className="text-sm text-gray-600">Havuz teknolojileri</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Tasarım</h3>
              <p className="text-sm text-gray-600">Havuz tasarım önerileri</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
